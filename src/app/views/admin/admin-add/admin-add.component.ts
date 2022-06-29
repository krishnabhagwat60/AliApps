import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, FormArray } from '@angular/forms';
import { User } from '../../../_models';
import { AdminService } from '../../../_services';
import { CommonService, MissionService } from '../../../_services';
import { Observable } from 'rxjs';
import { first, throwIfEmpty } from 'rxjs/operators';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AbstractControl } from '@angular/forms';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { Title } from '@angular/platform-browser';
class Category {
  CategoyName: string;
  CategoryId: string;
  data: any[];
}
const uri = environment.httpBaseUrl + 'common/UploadFile';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss'],
  preserveWhitespaces: true
})

export class AdminAddComponent implements OnInit {
  dataSaved = false;
  addAdminForm: FormGroup;
  allUsers: Observable<User[]>;
  userIdUpdate = null;
  massage = null;
  imageSrc: any;
  categoryId = null;
  categories: Category[];
  subCategories: Category[];
  degrees: any[];
  speakUnderstandLanguages: any[];
  selectedAdminLanguage: any[] = [];
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  EmailError = '';
  MobileNOError = '';
  success = '';
  parameters: any;
  DegreeSelectedArray: any[];
  LanguageSelectedArray: any[];
  SelectedGenderId: number;
  dropdownList: any[];
  selectedItems: any;
  dropdownSettings: any;
  fileUploadParams: any;
  fileData: File = null;
  selectedFile: File = null;
  imageValidate: boolean;
  fd = new FormData();
  minAge: any;
  uploader: FileUploader = new FileUploader({ url: uri });
  NameError: boolean;
  DescEnglishError: boolean;
  DescArabicError: boolean;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',

    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    minDate: new Date(Date.now()), // Minimal selectable date
    maxDate: new Date(Date.now()),  // Maximal selectable date
    // barTitleIfEmpty: 'Click to select a date',
    // placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Special Characeters are not allowed' }
    ],
    emailAddress: [
      { type: 'required', message: 'Email Address is required' },
      { type: 'pattern', message: 'Email Address is not correct' },

    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: 'Password must have 6 to 20 characters.' }
    ]
  };

  constructor(private titleService: Title,private formbulider: FormBuilder, private adminService: AdminService, private commonService: CommonService, private router: Router, private missionService: MissionService) {
    this.missionService.announceMission('Add Admin');
  }


  ngOnInit() {
    this.titleService.setTitle('Add Admin');
    this.NameError = false;
    var today = new Date();
    this.addAdminForm = this.formbulider.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      emailAddress: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      password: ['', [Validators.required, Validators.pattern('^.{6,20}$')]],
      userStatusId: [false]
    });
    this.detectFormChanges();
  }

  ngAfterViewInit() {
    $('input, select').attr('autocomplete', 'nan');
    $('input[type="password"]').attr('autocomplete', 'new-password');
  }

  get f() { return this.addAdminForm.controls; }

  @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;
  @ViewChild('log') log: ElementRef;
  @ViewChild('checkedItemsLog') checkedItemsLog: ElementRef;

  detectFormChanges(): void {
    this.addAdminForm.valueChanges.subscribe(val => {
      this.submitted = false;
    });
  }

  onSubmit() {
    this.NameError = false;
    if (this.f.name.value.trim() == '') {
      this.NameError = true;
      this.scrollToTop();
      return false;
    }
    this.submitted = true;
    this.parameters = {
      "name": this.f.name.value,
      "emailAddress": this.f.emailAddress.value,
      "password": this.f.password.value,
      "userStatusId": (this.f.userStatusId.value == true) ? 1 : 3

    }
    // stop here if form is invalid
    if (this.addAdminForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';
    this.EmailError = '';
    this.adminService.create(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 72) {
          this.addAdminForm.reset();
          if (data.statusInfo.message) {
            this.success = 'Admin added successfully.';
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', 'Admin added successfully.')


        } else if (data.statusInfo.statusCode == 12) {
          if (data.statusInfo.message) {
            this.EmailError = 'Email address is already exists';
          } else {
            this.error = 'An Error Occured'
          }

          this.loading = false;
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


  checkExperience(control: AbstractControl) {
    console.log(1111);

    const group = control.parent;
    if (group) {

      // var date2 = new Date(group.controls['DOB'].value); // 2015-12-1
      // var date1 = new Date(); // 2014-01-1

      // var diff =  Date.parse(group.controls['DOB'].value) - Date.parse(date1)

      // diff.years();
    }

    return null;
  }
}
