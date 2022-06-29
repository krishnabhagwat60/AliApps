import { Component, OnInit } from '@angular/core';
import { LanguageService, MissionService } from '../../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

class Language {
  languageId: number;
  name: string;
  data: any[];
}


@Component({
  selector: 'app-language-edit',
  templateUrl: './language-edit.component.html',
  styleUrls: ['./language-edit.component.scss']
})
export class LanguageEditComponent implements OnInit {

  language: Language[];
  languageId = null;
  languageDetail: any;
  addLanguageForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  parameters: any;
  imageSrc: any;
  NameEnglishError: boolean;
  NameArabicError: boolean;
  validation_messages = {
    'name_english': [
      { type: 'required', message: 'Language Name in English is required' }
    ],
    'name_arabic': [
      { type: 'required', message: 'Language Name in arabic is required' }
    ],

  };
  constructor(
    private titleService: Title,
    private formbulider: FormBuilder,
    private languageService: LanguageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private missionService: MissionService
  ) {
    this.languageId = "";
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.languageId = this.activatedRoute.snapshot.paramMap.get("id");
      // console.log(this.languageId + ' paramid'); // Print the parameter to the console. 
    });
    this.missionService.announceMission('Edit Language');
  }

  ngOnInit() {
    this.titleService.setTitle('Edit Language');
    this.NameEnglishError = false;
    this.NameArabicError = false;
    this.addLanguageForm = this.formbulider.group({
      name_english: ['', [Validators.required]],
      name_arabic: ['', [Validators.required]]
    });

    this.languageService.getLanguageById(this.languageId).pipe(first()).subscribe(
      resp => {
        this.languageDetail = resp;
        // console.log(JSON.stringify(this.languageDetail) + ' cate');
        const name_english = resp.languageName.find(x => x.languageId === environment.englishLanguageId);
        const name_arabic = resp.languageName.find(x => x.languageId === environment.arabicLanguageId);

        this.addLanguageForm.controls['name_english'].setValue(name_english.lookupValue);
        this.addLanguageForm.controls['name_arabic'].setValue(name_arabic.lookupValue);
      },
      error => {
      }
    );
  }

  get f() { return this.addLanguageForm.controls; }

  onSubmit() {
    console.log(this.f);
    this.submitted = true;
    this.NameEnglishError = false;
    this.NameArabicError = false;

    if (this.f.name_english.value.trim() == '') {
      this.NameEnglishError = true;
      return false;
    } else if (this.f.name_arabic.value.trim() == '') {
      this.NameArabicError = true;
      return false;
    }
    this.parameters = {
      "lookupDetailsId": this.languageId,
      "lookupLangDetail": [
        {
          "language_id": environment.englishLanguageId,
          "languageName": this.f.name_english.value
        },
        {
          "language_id": environment.arabicLanguageId,
          "languageName": this.f.name_arabic.value
        }
      ]
    }

    if (this.addLanguageForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.languageService.createUpdate(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 53) {
          // this.router.navigate([this.returnUrl]);

          if (data.statusInfo.message) {
            this.success = data.statusInfo.message;
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', 'Language has been updated successfully.')
          this.router.navigate(['/language']);
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

}
