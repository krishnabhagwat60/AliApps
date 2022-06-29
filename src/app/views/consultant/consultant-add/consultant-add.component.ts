import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, FormArray } from '@angular/forms';
import { User } from '../../../_models';
import { ConsultantService } from '../../../_services';
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
  selector: 'app-consultant-add',
  templateUrl: './consultant-add.component.html',
  styleUrls: ['./consultant-add.component.scss'],
  preserveWhitespaces: true
})

export class ConsultantAddComponent implements OnInit {
  dataSaved = false;
  addConsultantForm: FormGroup;
  allUsers: Observable<User[]>;
  userIdUpdate = null;
  massage = null;
  imageSrc: any;
  categoryId = null;
  categories: Category[];
  subCategories: Category[];
  degrees: any[];
  speakUnderstandLanguages: any[];
  selectedConsultantLanguage: any[] = [];
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
    'firstName': [
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
    ],
    mobileNo: [
      { type: 'required', message: 'Mobile No is required' },
      { type: 'pattern', message: 'Mobile No must have only in number format' },
      { type: 'minlength', message: 'Mobile No must have 4 digits' }
    ],
    DOB: [{ type: 'required', message: 'Date Of Birth is required' }],
    genderId: [{ type: 'required', message: 'Gender is required' }],
    categoryId: [
      { type: 'required', message: 'Please select a category' },
      // { type: 'requiredTrue', message: 'Please select a sub category' }
    ],
    subCategoryId: [
      { type: 'required', message: 'Please select a sub category' },
      // { type: 'requiredTrue', message: 'Please select a sub category' }
    ],
    experience: [
      { type: 'required', message: 'Experience is required' },
      { type: 'pattern', message: 'Experience must only in number value' },
      { type: 'max', message: 'Experience cannot be greater than 99' },
      { type: 'min', message: 'Experience must be greater than 0' }
    ],
    price: [
      { type: 'required', message: 'Price is required' },
      { type: 'pattern', message: 'Price must only in number value' },
      { type: 'min', message: 'Price must be in between 1 KD to 15 KD' },
      { type: 'max', message: 'Price must be in between 1 KD to 15 KD' }
    ],
    commissionPercentage: [
      { type: 'required', message: 'Commission Percentage is required' },
      { type: 'pattern', message: 'Commission Percentage must only in number value' },
      { type: 'max', message: 'Maximum Commission Percentage is 100' },
      { type: 'min', message: 'Minimum Commission Percentage is 1' }

    ],
//    degree: [{ type: 'required', message: 'Please select degree' }],
    language: [{ type: 'required', message: 'Please select at least one language' }],
    description_english: [{ type: 'required', message: 'Description (English) is required' }],
    description_arabic: [{ type: 'required', message: 'Description (Arabic) is required' }],

  };

  constructor(private titleService: Title,private formbulider: FormBuilder, private consultantService: ConsultantService, private commonService: CommonService, private router: Router, private missionService: MissionService) {
    this.missionService.announceMission('Add Consultant');
  }


  ngOnInit() {
    this.titleService.setTitle('Add Consultant');
    this.NameError = false;
    this.DescEnglishError = false;
    this.DescArabicError = false;

    this.imageValidate = true;

    var minAge = 18;
    var today = new Date();
    this.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    this.addConsultantForm = this.formbulider.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      emailAddress: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      password: ['', [Validators.required, Validators.pattern('^.{6,20}$')]],
      mobileNo: ['', [Validators.required, Validators.minLength(4)]],
      DOB: ['', [Validators.required]],
      genderId: ['',],
      // userTypeId : ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      subCategoryId: ['', [Validators.required]],
      experience: ['', [Validators.required, Validators.max(99), Validators.min(0.1)]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(15)]],
      commissionPercentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
//      degree: ['', [Validators.required]],
      language: new FormArray([], this.minSelectedCheckboxes(1)),
      description_english: ['', [Validators.required]],
      description_arabic: ['', [Validators.required]],
      image: ['', [Validators.required]],
      image1: ['', []],
      userStatusId: [false]
    });

    this.categoryId = '';
    this.SelectedGenderId = 1;
    this.consultantService.getAllCategories(this.categoryId)
      .pipe(first())
      .subscribe(
        resp => {
          this.categories = resp;
          //console.log(JSON.stringify(this.categories) + ' cate');

        },
        error => {
        });

    // this.consultantService.getAllDegree().subscribe(
    //   resp => {
    //     this.degrees = resp;
    //   },
    //   error => {
    //   });

    this.consultantService.getAllLanguage().subscribe(
      resp => {
        this.speakUnderstandLanguages = resp;
        this.addCheckboxes();
      },
      error => {
      });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'lookupDetails_Id',
      textField: 'lookupValue',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: false,
      enableCheckAll: false
    };
    this.detectFormChanges();
  }

  ngAfterViewInit() {
    $('input, select').attr('autocomplete', 'nan');
    $('input[type="password"]').attr('autocomplete', 'new-password');
  }

  get f() { return this.addConsultantForm.controls; }

  readURL(event: any): void {

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }

  }

  getSubcategories(categoryID, categories) {
    this.addConsultantForm.controls['subCategoryId'].setValue(null);
    var categoryData = categories.filter(index => index.categoryId == categoryID);
    if (categoryData[0].hasSubCategory) {
      this.addConsultantForm.get('subCategoryId').setValidators([Validators.required]);
    } else {
      this.addConsultantForm.get('subCategoryId').clearValidators();
    }
    this.addConsultantForm.get('subCategoryId').updateValueAndValidity();
    this.consultantService.getAllCategories(categoryID)
      .pipe(first())
      .subscribe(

        resp => {
          this.subCategories = resp;
          // console.log(JSON.stringify(this.subCategories) + ' cate');

        },
        error => {

        });
  };

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


  listOnSelect(event: any): void {
    console.log(event)
    if (event.args) {
      let item = event.args.item;
      if (item) {
        let valueElement = document.createElement('div');
        valueElement.innerHTML = `Value: ${item.value}`;

        let labelElement = document.createElement('div');
        labelElement.innerHTML = `Label: ${item.label}`;

        let checkedElement = document.createElement('div');
        checkedElement.innerHTML = `Checked: ${item.checked}`;

        let selectionLog = this.log.nativeElement;
        selectionLog.innerHTML = '';

        let items = this.myDropDownList.getCheckedItems();
        let checkedItemsArray = [];
        console.log(items)
        let checkedItems = '';
        for (let i = 0; i < items.length; i++) {
          checkedItems += items[i].label + ', ';
          checkedItemsArray[i] = items[i].value;
        }
 //       this.DegreeSelectedArray = checkedItemsArray;
        // this.checkedItemsLog.nativeElement.innerHTML = checkedItems;
      }
    }
  };

  addCheckboxes() {
    this.speakUnderstandLanguages.forEach((o, i) => {
      const control = new FormControl(); // if first item set to true, else false
      (this.addConsultantForm.controls.language as FormArray).push(control);
    });
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);

      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };

    return validator;
  }

  detectFormChanges(): void {
    this.addConsultantForm.valueChanges.subscribe(val => {
      this.submitted = false;
    });
  }

  onSubmit() {
    const selectedLanguageIds = this.addConsultantForm.value.language
      .map((v, i) => v ? this.speakUnderstandLanguages[i].lookupDetails_Id : null)
      .filter(v => v !== null);

    this.NameError = false;
    this.DescEnglishError = false;
    this.DescArabicError = false;

    if (this.f.firstName.value.trim() == '') {

      this.NameError = true;
      this.scrollToTop();
      return false;
    } else if (this.f.description_english.value.trim() == '') {
      this.DescEnglishError = true;
      return false;
    } else if (this.f.description_arabic.value.trim() == '') {
      this.DescArabicError = true;
      return false;
    }

    if (this.selectedFile != null && (this.selectedFile.type != 'image/png') && (this.selectedFile.type != 'image/jpeg')) {
      this.imageValidate = false;
      this.scrollToTop();
      return false;
    }
    this.submitted = true;
    this.parameters = {
      "firstName": this.f.firstName.value,
      "middleName": "",
      "lastName": "",
      "emailAddress": this.f.emailAddress.value,
      "mobileNo": this.f.mobileNo.value,
      "DOB": this.f.DOB.value,
      "genderId": this.SelectedGenderId,
      "userTypeId": environment.ProviderUserTypeId,
      "categoryId": this.f.categoryId.value,
      "subCategoryId": this.f.subCategoryId.value,
      "experience": this.f.experience.value,
      "price": this.f.price.value,
      "commissionPercentage": this.f.commissionPercentage.value,
//      "degree": [],
      "language": selectedLanguageIds,
      "description": [
        {
          "language_Id": environment.englishLanguageId,
          "description": this.f.description_english.value,
        },
        {
          "language_Id": environment.arabicLanguageId,
          "description": this.f.description_arabic.value,
        }
      ],
      "password": this.f.password.value,
      "userStatusId": (this.f.userStatusId.value == true) ? 1 : 3

    }

    var i = 0;
    // this.f.degree.value.forEach(element => {
    //   this.parameters['degree'][i] = (element.lookupDetails_Id);
    //   i = i + 1;
    // });

    // console.log(JSON.stringify(this.parameters)+' params');
    // stop here if form is invalid
    if (this.addConsultantForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';
    this.MobileNOError = '';
    this.EmailError = '';
    this.consultantService.create(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 54) {

          this.uploader.options.headers = [
            { name: 'AppId', value: '3' },
            { name: 'UserId', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).userId : '', },
            { name: 'LoginToken', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).loginToken : '', },
            { name: 'LanguageId', value: environment.englishLanguageId },
            { name: 'DeviceId', value: environment.deviceId },
          ];
          this.uploader.options.additionalParameter = {
            fileType: 1,
            userId: data.data.userId,
            categoryId: "",
            appointmentId: ""
          }
          this.uploader.uploadAll();
          this.addConsultantForm.reset();
          if (data.statusInfo.message) {
            this.success = 'Consultant added successfully.';
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', 'Consultant added successfully.')
          // this.router.navigate(['/consultant']);
          if (this.selectedFile !== null && this.imageValidate) {
            this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
              this.router.navigate(['/consultant']);
            };
          }else{
            this.router.navigate(['/consultant']);
          }


        } else if (data.statusInfo.statusCode == 12) {
          if (data.statusInfo.message) {
            this.EmailError = 'Email address is already exists';
          } else {
            this.error = 'An Error Occured'
          }

          this.loading = false;
        } else if (data.statusInfo.statusCode == 13) {
          if (data.statusInfo.message) {
            this.MobileNOError = 'Mobile No is already exists';
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
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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
