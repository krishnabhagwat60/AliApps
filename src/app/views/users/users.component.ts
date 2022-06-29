import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../_models';
import { AuthenticationService } from '../../_services';
import { first } from 'rxjs/operators';
import { UserService, MissionService} from '../../_services';
import { Observable, empty } from 'rxjs';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

declare var $;

class Person {
  userId: number;
  firstName: string;
  lastName: string;
  data: any[];
}

class DataTablesResponse {
  data: any[];
  // draw: number;
  // recordsFiltered: number;
  totalRecords: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[];
  pageNo: number;
  pageSize: number;
  sortOrderId: number;
  sortFieldName: string;
  searchText: string;
  columnName: {};
  sortArray: {};
  dataSaved = false;
  userForm: any;
  allUsers: Observable<User[]>;
  userIdUpdate = null;
  massage = null;
  closeResult: string;
  userID: string;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger = new Subject();
  parameters: any;
  addCreditForm:FormGroup;
  error:any;
  success:any;
  loading:any;
  userName:string;
  MessageError:boolean;
  startRowCount=0;
  invalidForm = false;
  displayPopup = false;
  alluserID : any = [];
  allCheckedUsers : any = [];
  isAllChecked: boolean;

  validation_messages = {
    'price': [
      { type: 'required', message: 'Price is required' },
      { type: 'min', message: 'Price must be greater than 0' }
    ],
    'message': [
      { type: 'required', message: 'Message is required' }
    ],

  };
  private dsData: any;
  constructor(
    private titleService: Title,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private modalService: NgbModal,
    public modal: NgbActiveModal,
    public _router: Router,
    public _location: Location,
    private formbulider: FormBuilder,
    private missionService:MissionService
  ) {
    this.missionService.announceMission('Users');
   }
  public _refreshNeeded$ = new Subject<void>();
  ngOnInit(): void {
    this.titleService.setTitle('Users');
    const that = this;
    this.MessageError = false;
    this.success = localStorage.getItem('success');
    localStorage.removeItem('success');
    if(this.success == null){
      this.displayPopup = true;
    }
    this.addCreditForm = this.formbulider.group({
      price: ['', [Validators.required, Validators.min(1)]],
      message: ['', [Validators.required]]
    });


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      // scrollY: "350px",
      // scrollX: false,
      // paging: true,
      // retrieve: true,
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
        this.pageSize = dataTablesParameters.length;
        this.searchText = dataTablesParameters.search.value;
        this.columnName = ["","", "", "firstName", "mobileNo", "emailAddress", "createdDate"];
        this.startRowCount = dataTablesParameters.start;
        this.sortFieldName = this.columnName[dataTablesParameters.order[0].column];
        if (dataTablesParameters.order[0].dir == 'asc') {
          this.sortOrderId = 1;
        } else if (dataTablesParameters.order[0].dir == 'desc') {
          this.sortOrderId = 2;
        } else {
          this.sortOrderId = 1;
        }
        console.log(this.pageNo);
        this.sortOrderId = (this.columnName[dataTablesParameters.order[0].column] == '')?3:this.sortOrderId;
        this.authenticationService.userList(this.pageNo, this.pageSize, this.sortOrderId, this.sortFieldName, this.searchText)
          .pipe(first())
          .subscribe(

            resp => {
              //is all checked;
              let start = (this.pageNo - 1) * this.pageSize;
              if(that.allCheckedUsers.length ==0){
                 for(var i=0;i <resp.totalRecords; i++){ that.allCheckedUsers.push({'checked': false})}
              }
              for (const element of resp.records) {
                  if(that.allCheckedUsers[start].checked == false){ that.isAllChecked =false; }
                  element['checked'] = that.allCheckedUsers[start].checked == true ? true : false;
                  that.allCheckedUsers[start]= element;
                  start++;
              }

              that.persons = resp.records;
              callback({
                recordsTotal: resp.totalRecords,
                recordsFiltered: resp.totalRecords,
                data: []
              });
            },
            error => {

            });
      },
      order:[[6, 'desc']],
      columns: [{orderable:false},{orderable:false},{orderable:false}, { data: 'firstName' }, { data: 'mobileNo' }, { data: 'emailAddress' }, {orderable:false}]
    };
    setTimeout (() => {
      this.displayPopup = true;
      console.log('settime fiif');
   }, 3000);
  }
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  deleteUser(userId: string) {
    if (userId) {
      this.userID = userId;
      this.userService.deleteUserById(this.userID).subscribe(() => {
        this.massage = 'Record Deleted Succefully';
        localStorage.setItem('success', 'User Deleted Successfully');
        this.userIdUpdate = null;
        this.modalService.dismissAll();
        this.refresh();
      });
    }
    if (this.alluserID) {

    this.userService.deleteSelectedUserById(this.alluserID).subscribe(() => {
      this.massage = 'Record Deleted Succefully';
      localStorage.setItem('success', 'Consultant Deleted Successfully');
      this.userIdUpdate = null;
      this.modalService.dismissAll();
      this.refresh();

    });


    }


  }

  open(content, userId) {
    this.userID = userId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openMultiple(content) {
    // all checked usersId;
    this.alluserID = [];
    for(let element of this.allCheckedUsers){
        if(element.checked == true){
              this.alluserID.push(element.userId);
        }
    }
    if(this.alluserID.length ==0){ return}
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  public checkAll(ev) {
    console.log(this.persons);
    let start = (this.pageNo - 1) * this.pageSize;
    for(var i=start;i<start + this.pageSize;i++){
      this.allCheckedUsers[i]['checked'] =ev.target.checked;
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

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  rerender(): void {
    setTimeout(() => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }, 1000)
  }


  refresh(): void {
    this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }

  openCreditModal(creditContent, userId, userName) {
    this.invalidForm = false;
    this.addCreditForm.reset();
    this.userID = userId;
    this.userName = userName;
    this.modalService.open(creditContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  get f() { return this.addCreditForm.controls; }
  onSubmitCredit() {
    console.log(this.f);
    this.MessageError = false;

 
    this.parameters = {
      "userId": this.userID,
      "price": this.f.price.value,
      "message": this.f.message.value,
    }

    if (this.addCreditForm.invalid) {
      this.invalidForm = true;
      return;
    }
    if(this.f.message.value.trim() == ''){
      this.MessageError = true;
      return false;
    }
    this.loading = true;
    this.success = '';
    this.error = '';

    this.userService.addCredit(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 56) {
          // this.router.navigate([this.returnUrl]);
          this.addCreditForm.reset();
          this.modalService.dismissAll();
          if (data.statusInfo.message) {
            this.success = 'Credit added to successfully';
          } else {
            this.success = 'Done Successfully';
          }
          this.success = 'Credit added to successfully';
          this.displayPopup = false;

        }else{
          this.error = data.statusInfo.message;
        }
        this.loading = false;

      },
      error => {
        this.error = 'An Error Occured'
        this.loading = false;

      });
      setTimeout (() => {
        this.displayPopup = true;
        console.log('settime fiif');
     }, 3000);
  }

  dismiss(){
    this.modalService.dismissAll();
  }

}
