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
  selector: 'app-language-add',
  templateUrl: './language-add.component.html',
  styleUrls: ['./language-add.component.scss']
})
export class LanguageAddComponent implements OnInit {

  language: Language[];
  languageId = null;
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
    private missionService: MissionService
  ) {
    this.languageId = "";
    this.missionService.announceMission('Add Language');
  }

  ngOnInit() {
    this.titleService.setTitle('Add Language');
    this.NameEnglishError = false;
    this.NameArabicError = false;
    this.addLanguageForm = this.formbulider.group({
      name_english: ['', [Validators.required]],
      name_arabic: ['', [Validators.required]]
    });

  }

  get f() { return this.addLanguageForm.controls; }

  onSubmit() {

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
      "lookupDetailsId": "",
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
        if (data.statusInfo.statusCode == 54) {
          // this.router.navigate([this.returnUrl]);
          this.addLanguageForm.reset();
          if (data.statusInfo.message) {
            this.success = 'Language has been added successfully';
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', 'Language has been added successfully.')
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
