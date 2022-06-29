import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../_models';
import { CategoriesService, MissionService } from '../../_services';
import { AppService } from '../../_services/shared.service';
import { first } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Title } from '@angular/platform-browser';
declare var $;

class Category {
  categoryId: string;
  categoryName: string;
  imageURL: string;
  createdDateTime: any;
}

class DataTablesResponse {
  data: any[];
  // draw: number;
  // recordsFiltered: number;
  totalRecords: number;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  categories: Category[];
  pageNo: number;
  pageSize: number;
  sortOrderId: number;
  sortFieldName: string;
  searchText: string;
  columnName: {};
  sortArray: {};
  dataSaved = false;
  userForm: any;
  displayPopup = false;
  allUsers: Observable<User[]>;
  userIdUpdate = null;
  massage = null;
  closeResult: string;
  categoryID: string;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  success: any;
  error: any;
  startRowCount = 0;
  firstTime = 1;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private categoriesService: CategoriesService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public _location: Location,
    private appService: AppService,
    private missionService: MissionService
  ) {
    this.appService.setMyGV('Categories');
    this.missionService.announceMission('Categories');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Categories');
    const that = this;
    this.success = localStorage.getItem('success');
    this.error = localStorage.getItem('error');
    localStorage.removeItem('success');
    localStorage.removeItem('error');
    if (this.success == null && this.error == null) {
      this.displayPopup = true;
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: false,
      // scrollY: "350px",
      // scrollX: false,
      // paging: true,
      // retrieve: true,
     
      ajax: (dataTablesParameters: any, callback) => {
        this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        this.pageSize = dataTablesParameters.length;
        this.searchText = dataTablesParameters.search.value;
        this.columnName = ["", "", "categoryName", "createdDateTime"];
        this.startRowCount = dataTablesParameters.start;
        this.sortFieldName = (this.firstTime == 1)? 'createdDateTime': this.columnName[dataTablesParameters.order[0].column];
        if (dataTablesParameters.order[0].dir == 'asc') {
          this.sortOrderId = 1;
        } else if (dataTablesParameters.order[0].dir == 'desc') {
          this.sortOrderId = 2;
        } else {
          this.sortOrderId = 1;
        }
        this.sortOrderId = (this.columnName[dataTablesParameters.order[0].column] == '') ? 3 : this.sortOrderId;
        this.firstTime = 2;
        this.categoriesService.getAll(this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
          .pipe(first())
          .subscribe(

            resp => {
              console.log(resp + ' dfdf');
              that.categories = resp.records;
              callback({
                recordsTotal: resp.totalRecords,
                recordsFiltered: resp.totalRecords,
                data: []
              });
            },
            error => {

            });
      },
      order: [[3, 'desc']], 
      columns: [{ orderable: false }, { orderable: false }, { data: 'categoryName' }, {orderable: false}]
      
    };
    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);
  }

  public getNotificationMsg(success, error) {
    this.success = success;
    this.error = error;
    if (this.success != null || this.error != null) {
      this.displayPopup = false;
      setTimeout(() => {
        this.displayPopup = true;
      }, 3000);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteCategory(categoryID: string) {
    if (categoryID) {
      this.categoryID = categoryID;
    }
    this.categoriesService.deleteCategoryById(this.categoryID).subscribe(

      data => {
        if (data.statusInfo.statusCode == 63) {
          // localStorage.setItem('error', 'This Category has sub category(s). So, you can not delete it.');
          var error = 'This Category has sub category(s). So, you can not delete it.';
          this.modalService.dismissAll();
          this.getNotificationMsg('', error);
          // this.refresh();
        } else if (data.statusInfo.statusCode == 52) {
          if (data.statusInfo.message) {
            this.success = data.statusInfo.message;
          }
          localStorage.setItem('success', 'Category Deleted Successfully.')
          this.massage = 'Category Deleted Succefully';
          this.userIdUpdate = null;
          this.modalService.dismissAll();
          this.refresh();
        }else if (data.statusInfo.statusCode == 58) {
          // localStorage.setItem('error', 'Some Consultants are using this category, It can\'t be deleted.');
          var error = 'Some Consultants are using this category, It can\'t be deleted.';
          this.userIdUpdate = null;
          this.modalService.dismissAll();
          this.getNotificationMsg('', error);
          // this.refresh();
        } else {
          this.error = data.statusInfo.message;
        }
      },
      error => {
        this.error = 'An Error Occured'
      }
    );

    // this.massage = 'Category Deleted Succefully';
    // this.userIdUpdate = null;
    this.modalService.dismissAll();
    // this.refresh();
  }

  open(content, categoryID) {
    this.categoryID = categoryID;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  refresh(): void {
    this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }
}
