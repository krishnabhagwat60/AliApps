import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { User } from '../../../_models';
import { DatePipe } from '@angular/common'
import { AdminService, MissionService } from '../../../_services';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { Title } from '@angular/platform-browser';
class Category {
  CategoyName: string;
  CategoryId: string;
  data: any[];
}
const uri = environment.httpBaseUrl + 'common/UploadFile';
@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit, AfterViewInit {
  dataSaved = false;
  adminViewDetail: any[];
  selectedAdminLanguage: any[] = [];
  addAdminForm: FormGroup;
  allUsers: Observable<User[]>;
  userIdUpdate = null;
  massage = null;
  imageSrc: any;
  categoryId = null;
  categories: Category[];
  subCategories: Category[];
//  degrees: any[];
  speakUnderstandLanguages: any[] = [];
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  EmailError = '';
  MobileNOError = '';
  IsApproveError = '';
  success = '';
  parameters: any;
//  DegreeSelectedArray: any[];
  SelectedGenderId: number;
  adminId: any;
  SelectedDOB: any;
  SelectedCategoryId: number;
  SelectedSubCategoryId: number;
  dropdownList: any[];
  selectedItems: any;
  dropdownSettings: any;
  minAge: any;
  selectedFile: File = null;
  imageValidate: boolean;
  NameError: boolean;
  PasswordError: boolean;

  DescEnglishError: boolean;
  DescArabicError: boolean;
  uploader: FileUploader = new FileUploader({ url: uri })
  validation_messages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Special Characeters are not allowed' }
    ],
    emailAddress: [
      { type: 'required', message: 'Email Address is required' },
      { type: 'pattern', message: 'Email Address is not correct' },

    ],
    // password: [
    //   { type: 'required', message: 'Password is required' },
      // { type: 'pattern', message: 'Password must have 6 to 20 characters which includes at least one special character. Ex: @ or #.' }
    // ],

  };

  constructor(private titleService: Title,private formbulider: FormBuilder, public datepipe: DatePipe, private adminService: AdminService, private activatedRoute: ActivatedRoute, private router: Router, private missionService: MissionService) {
    this.activatedRoute.queryParams.subscribe(params => {
      // this.adminId = params['id'];
      this.adminId = this.activatedRoute.snapshot.paramMap.get("id");
      // console.log(this.adminId + ' paramid'); // Print the parameter to the console. 
    });
    this.missionService.announceMission('Edit Admin');
  }


  ngOnInit() {
    this.titleService.setTitle('Edit Admin');
    this.NameError = false;
    this.DescEnglishError = false;
    this.DescArabicError = false;
    this.imageValidate = true;
    var minAge = 18;
    var today = new Date();
    this.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    this.addAdminForm = this.formbulider.group({ 
      name: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      password: [''],
      userStatusId: [false]
    });
      this.adminService.getAdminById(this.adminId).subscribe(admin => {
        this.adminViewDetail = admin;
        this.massage = null;
        this.dataSaved = false;
        this.addAdminForm.controls['name'].setValue(admin.name);
        this.addAdminForm.controls['emailAddress'].setValue(admin.emailaddress);
        this.addAdminForm.controls['userStatusId'].setValue((admin.userStatusId == 1) ? true : false);
        if (admin.userStatusId == 1) {
          this.addAdminForm.controls['userStatusId'].disable();
        }

      });
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;
  @ViewChild('log') log: ElementRef;
  @ViewChild('checkedItemsLog') checkedItemsLog: ElementRef;

  source: any = {
    datatype: 'json',
    datafields: [
      { name: 'lookupDetails_Id' },
      { name: 'lookupValue' }
    ],
    id: 'id',
    url: 'assets/img/customer.txt'
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  genderOnCheck(event: any): void {
    this.SelectedGenderId = event.path[0].value;
  }


  detectFormChanges(): void {
    this.addAdminForm.valueChanges.subscribe(val => {
      this.submitted = false;
    });
  }

  get f() { return this.addAdminForm.controls; }


  onSubmit() {
    console.log(this.addAdminForm)
    this.NameError = false;
    this.PasswordError = false;

    if (this.f.name.value.trim() == '') {
      this.NameError = true;
      this.scrollToTop();
      return false;
    }
    if (this.f.password.value.trim() != '') {
    	  console.log(this.f.password.value.length);
    	if(this.f.password.value.length <6 || this.f.password.value.length >20){
		      this.PasswordError = true;
		      this.scrollToTop();
		      return false;
		  }
    }

     // console.log(this.f);
    this.submitted = true;
    this.parameters = {
      "adminId": this.adminId,
      "name": this.f.name.value,
      "emailAddress": this.f.emailAddress.value,
      "password": this.f.password.value,
    }
    if (this.addAdminForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';
    this.EmailError = '';
    this.adminService.update(this.parameters).pipe(first()).subscribe(
      data => {
        if (data.statusInfo.statusCode == 53) {
          if (data.statusInfo.message) {
            this.success = 'Admin has been updated successfully.';
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', 'Admin updated successfully.');

          if (this.selectedFile !== null && this.imageValidate) {
            this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
              this.router.navigate(['/admin']);
            };
          }else{
            this.router.navigate(['/admin']);
          }

        } else if (data.statusInfo.statusCode == 12) {
          if (data.statusInfo.message) {
            this.EmailError = "Email address is already exists";
          } else {
            this.error = 'An Error Occured'
          }

          this.loading = false;
        } else if (data.statusInfo.statusCode == 64) {
          if (data.statusInfo.message) {
            this.IsApproveError = 'You can\'t change the active user status';
          } else {
            this.error = 'An Error Occured'
          }
        } else if (data.statusInfo.statusCode == 6) {
          if (data.statusInfo.message) {
            this.error = 'Invalid parameter';
          } else {
            this.error = 'An Error Occured'
          }
        }
        this.loading = false;
        this.scrollToTop();
      },
      error => {
        this.error = 'An Error Occured'
        this.loading = false;
        this.scrollToTop();
      });

  }

  scrollToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  ngAfterViewInit() {
    $('input, select').attr('autocomplete', 'nan');
    $('input[type="password"]').attr('autocomplete', 'new-password');
  }


}
