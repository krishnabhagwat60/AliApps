import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { CategoriesService } from '../../../_services';
import { ConsultantService, CommonService, MissionService } from '../../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
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
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit {

  categories: Category[];
  categoryId = null;
  parentCategoryId = null;
  addCategoryForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  parameters: any;
  categoryDetail: any[];
  imageSrc: any;
  displayPopup = false;
  fileUploadParams: any;
  selectedFile: File = null;
  imageValidate: boolean;
  NameArabicError: boolean;
  NameEnglishError: boolean;
  uploader: FileUploader = new FileUploader({ url: uri })
  validation_messages = {
    'image': [
      { type: 'required', message: 'Category Image is required' },

    ],
    'name_english': [
      { type: 'required', message: 'Catgory Name in English is required' }
    ],
    'name_arabic': [
      { type: 'required', message: 'Catgory Name in arabic is required' }
    ],

  };
  constructor(
    private titleService: Title,
    private titlecasePipe: TitleCasePipe,
    private formbulider: FormBuilder,
    private categoriesService: CategoriesService,
    private consultantService: ConsultantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private missionService: MissionService
  ) {

    this.categoryId = "";
    this.parentCategoryId = "";
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.categoryId = this.activatedRoute.snapshot.paramMap.get("id");
      this.parentCategoryId = this.activatedRoute.snapshot.paramMap.get("parentId") ? this.activatedRoute.snapshot.paramMap.get("parentId") : '';
      console.log(this.parentCategoryId + ' paramid'); // Print the parameter to the console. 

      if (this.parentCategoryId != '') {
        this.validation_messages.name_english = [{ type: 'required', message: 'Sub Catgory Name in English is required' }]
        this.validation_messages.name_arabic = [{ type: 'required', message: 'Sub Catgory Name in Arabic is required' }]
        this.missionService.announceMission('Edit Sub Category');
      } else {
        this.missionService.announceMission('Edit Category');
      }
    });
  }



  ngOnInit() {
    this.titleService.setTitle('Edit Category');
    this.NameArabicError = false;
    this.NameEnglishError = false;
    this.imageValidate = true;
    this.addCategoryForm = this.formbulider.group({
      name_english: ['', [Validators.required]],
      name_arabic: ['', [Validators.required]],
      parentCategoryId: [''],
      image: [''],
      hasSubCategory: [false]
    });

    this.consultantService.getAllCategories(this.categoryId)
      .pipe(first())
      .subscribe(
        resp => {
          this.categories = resp.categoryDetails;
          //console.log(JSON.stringify(this.categories) + ' cate');

        },
        error => {
        });

    this.categoriesService.getCategoryById(this.categoryId).pipe(first()).subscribe(
      resp => {
        this.categoryDetail = resp;
        this.imageSrc = resp.imageURL;
        // console.log(JSON.stringify(this.categoryDetail) + ' cate');
        const name_english = resp.categorylangdetail.find(x => x.language_id === environment.englishLanguageId);
        const name_arabic = resp.categorylangdetail.find(x => x.language_id === environment.arabicLanguageId);

        this.addCategoryForm.controls['name_english'].setValue(name_english.categoryName);
        this.addCategoryForm.controls['name_arabic'].setValue(name_arabic.categoryName);
        this.addCategoryForm.controls['hasSubCategory'].setValue(resp.hasSubCategory);
        this.addCategoryForm.controls['image'].setValue(this.imageSrc);
      },
      error => {
      }
    );
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

  get f() { return this.addCategoryForm.controls; }

  onSubmit() {
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


    // console.log(this.f);
    this.submitted = true;
    this.parameters = {
      "categoryId": this.categoryId,
      "hasSubCategory": this.f.hasSubCategory.value,
      "parentCategoryId": this.f.parentCategoryId.value,
      "categorylangdetail": [
        {
          "language_id": environment.englishLanguageId,
          // "categoryName": this.f.name_english.value
          "categoryName": this.transformToTitleCase(this.f.name_english.value)
        },
        {
          "language_id": environment.arabicLanguageId,
          "categoryName": this.transformToTitleCase(this.f.name_arabic.value)
          // "categoryName": this.f.name_arabic.value
        }
      ]
    }

    // console.log(this.parameters);
    // console.log(JSON.stringify(this.parameters)+' params');
    // stop here if form is invalid
    if (this.addCategoryForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';
    this.categoriesService.create(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 62) {
          this.error = 'Please remove the sub category then you can change the category type.';
        }
        if (data.statusInfo.statusCode == 61) {
          this.error = 'Provider assign to this category. so, you can\'t change the category type.';
        }
        if (data.statusInfo.statusCode == 53) {

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
            categoryId: this.categoryId,
            appointmentId: ""
          }
          this.uploader.options.allowedMimeType = ['image/png'];
          this.uploader.options.allowedFileType = ['image'];

          this.uploader.uploadAll();
          if (this.parentCategoryId == '') {
            localStorage.setItem('success', "Category updated successfully");
            this.router.navigate(['/categories']);
          } else {
            localStorage.setItem('success', "Sub Category updated successfully");
            this.router.navigate(['/categories/sub/' + this.parentCategoryId]);
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

  transformToTitleCase(value: string): string {
    return this.titlecasePipe.transform(value);
  }
}
