import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CategoriesService, MissionService } from '../../../_services';
import { first } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
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
  selector: 'app-categories-sub',
  templateUrl: './categories-sub.component.html',
  styleUrls: ['./categories-sub.component.scss']
})
export class CategoriesSubComponent implements OnInit {

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
  userIdUpdate = null;
  massage = null;
  closeResult: string;
  categoryID: string;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  success: any;
  error: any;
  parentCategoryId: string;
  name_english: string;
  name_arabic: string;
  imageSrc: any;
  startRowCount = 0;
  displayPopup = false;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private categoriesService: CategoriesService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public _location: Location,
    private activatedRoute: ActivatedRoute,
    private missionService: MissionService
  ) {
    this.parentCategoryId = "";
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.parentCategoryId = this.activatedRoute.snapshot.paramMap.get("id") ? this.activatedRoute.snapshot.paramMap.get("id") : '';
      console.log(this.parentCategoryId + ' paramid'); // Print the parameter to the console. 
    });
    this.missionService.announceMission('Sub Categories');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Sub Categories');
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
      processing: true,
      // scrollY: "350px",
      // scrollX: false,
      // paging: true,
      // retrieve: true,
      order: [[2, 'asc']],
      ajax: (dataTablesParameters: any, callback) => {
        this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        this.pageSize = dataTablesParameters.length;
        this.searchText = dataTablesParameters.search.value;
        this.columnName = ["", "", "categoryName"];
        this.sortFieldName = this.columnName[dataTablesParameters.order[0].column];
        this.startRowCount = dataTablesParameters.start;
        if (dataTablesParameters.order[0].dir == 'asc') {
          this.sortOrderId = 1;
        } else if (dataTablesParameters.order[0].dir == 'desc') {
          this.sortOrderId = 2;
        } else {
          this.sortOrderId = 1;
        }
        this.sortOrderId = (this.columnName[dataTablesParameters.order[0].column] == '') ? 3 : this.sortOrderId;

        this.categoriesService.getCategoryById(this.parentCategoryId).pipe(first()).subscribe(
          resp => {

            this.imageSrc = resp.imageURL;
            const name_english = resp.categorylangdetail.find(x => x.language_id === environment.englishLanguageId);
            const name_arabic = resp.categorylangdetail.find(x => x.language_id === environment.arabicLanguageId);
            this.name_english = name_english.categoryName;
            this.name_arabic = name_arabic.categoryName;

          },
          error => {
          }
        );


        this.categoriesService.getAllSubCategories(this.parentCategoryId, this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
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
      columns: [{ orderable: false }, { orderable: false }, { data: 'categoryName' }, { orderable: false }]
    };
    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);

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

        if (data.statusInfo.statusCode == 52) {
          // this.router.navigate([this.returnUrl]);
          if (data.statusInfo.message) {
            this.success = data.statusInfo.message;

          }
          localStorage.setItem('success', 'Sub Category Deleted successfully.')
          this.userIdUpdate = null;
          this.modalService.dismissAll();
          this.refresh();
        } else if (data.statusInfo.statusCode == 58) {
          localStorage.setItem('error', 'Some Consultants are using this sub category, It can\'t be deleted.')
          this.massage = 'Sub Category Deleted Succefully';
          this.userIdUpdate = null;
          this.modalService.dismissAll();
          this.refresh();
        } else {
          this.error = data.statusInfo.message;
        }
      },
      error => {
        this.error = 'An Error Occured'
      }
    );

    this.massage = 'Sub Category Deleted Succefully';
    this.userIdUpdate = null;
    this.modalService.dismissAll();
    this.refresh();
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
