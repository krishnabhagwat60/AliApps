import { Component, OnInit } from '@angular/core';
import { CategoriesService, } from '../../../_services';
import { ConsultantService, CommonService, MissionService } from '../../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { Title } from '@angular/platform-browser';
class Category {
  CategoyName: string;
  CategoryId: string;
  data: any[];
}
const uri = environment.httpBaseUrl + 'common/UploadFile';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.scss']
})

export class CategoriesAddComponent implements OnInit {
  categories: Category[];
  categoryId = null;
  addCategoryForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  parameters: any;
  imageSrc: any;
  displayPopup = true;
  fileUploadParams: any;
  selectedFile: File = null;
  imageValidate: boolean;
  uploader: FileUploader = new FileUploader({ url: uri })
  NameArabicError: boolean;
  NameEnglishError: boolean;
  validation_messages = {
    'image': [
      { type: 'required', message: 'Category Image is required' },

    ],
    'name_english': [
      { type: 'required', message: 'Category Name in English is required' },

    ],
    'name_arabic': [
      { type: 'required', message: 'Category Name in arabic is required' },

    ],

  };
  attachmentList: any = [];
  constructor(
    private titleService: Title,
    private formbulider: FormBuilder,
    private categoriesService: CategoriesService,
    private consultantService: ConsultantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private missionService: MissionService
  ) {
    this.categoryId = "";
    this.activatedRoute.queryParams.subscribe(params => {
      this.categoryId = this.activatedRoute.snapshot.paramMap.get("id") ? this.activatedRoute.snapshot.paramMap.get("id") : '';
      console.log(this.categoryId + ' paramid'); // Print the parameter to the console. 
    });

    if (this.categoryId != '') {
      this.validation_messages.name_english = [{ type: 'required', message: 'Sub Catgory Name in English is required' }]
      this.validation_messages.name_arabic = [{ type: 'required', message: 'Sub Catgory Name in Arabic is required' }]
      this.missionService.announceMission('Add Sub Category');

    } else {
      this.missionService.announceMission('Add Category');
    }


  }

  ngOnInit() {
    this.titleService.setTitle('Add Category');
    this.NameArabicError = false;
    this.NameEnglishError = false;
    this.imageValidate = true;
    this.addCategoryForm = this.formbulider.group({
      name_english: ['', [Validators.required]],
      name_arabic: ['', [Validators.required]],
      image: ['', [Validators.required]],
      hasSubCategory: [false]
    });

    this.consultantService.getAllCategories(this.categoryId)
      .pipe(first())
      .subscribe(
        resp => {
          this.categories = resp.categoryDetails;
        },
        error => {
        });
  }

  get f() { return this.addCategoryForm.controls; }

  async onSubmit() {
    this.displayPopup = false;
    this.NameEnglishError = false;
    this.NameArabicError = false;

    if (this.f.name_english.value.trim() == '') {
      this.NameEnglishError = true;
      return false;
    } else if (this.f.name_arabic.value.trim() == '') {
      this.NameArabicError = true;
      return false;
    }

    if (this.selectedFile != null && this.selectedFile.type != 'image/png') {
      this.imageValidate = false;
      return false;
    }



    this.submitted = true;
    this.parameters = {
      "categoryId": "",
      "hasSubCategory": this.f.hasSubCategory.value,
      "parentCategoryId": this.categoryId,
      "categorylangdetail": [
        {
          "language_id": environment.englishLanguageId,
          "categoryName": this.titleCaseWord(this.f.name_english.value)
        },
        {
          "language_id": environment.arabicLanguageId,
          "categoryName": this.titleCaseWord(this.f.name_arabic.value)
        }
      ]
    }

    // stop here if form is invalid
    if (this.addCategoryForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.categoriesService.create(this.parameters).pipe(first()).subscribe(

     async  data => {
        if (data.statusInfo.statusCode == 54) {
          this.addCategoryForm.reset();
          if (data.statusInfo.message) {
            this.success = 'Category has been added successfully.';
          } else {
            this.success = 'Done Successfully';
          }
          this.uploader.options.headers = [
            { name: 'AppId', value: '3' },
            { name: 'UserId', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).userId : '', },
            { name: 'LoginToken', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).loginToken : '', },
            { name: 'LanguageId', value: environment.englishLanguageId },
            { name: 'DeviceId', value: environment.deviceId },
          ];
          this.uploader.options.additionalParameter = {
            fileType: 2,
            userId: "",
            categoryId: data.data.categoryId,
            appointmentId: ""
          }
          var uploadFile = await this.uploader.uploadAll();
          console.log(uploadFile)

          if (this.categoryId == '') {
            localStorage.setItem('success', "Category added successfully");
            this.router.navigate(['/categories']);
          } else {
            localStorage.setItem('success', "Sub Category added successfully");
           this.router.navigate(['/categories/sub/' + this.categoryId]);
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
    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);
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

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}
