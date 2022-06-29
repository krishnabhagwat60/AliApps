import { Component, OnInit } from '@angular/core';
import { DegreeService, MissionService } from '../../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

class Degree {
  degreeId: number;
  name: string;
  data: any[];
}

@Component({
  selector: 'app-degrees-add',
  templateUrl: './degrees-add.component.html',
  styleUrls: ['./degrees-add.component.scss']
})
export class DegreesAddComponent implements OnInit {

  degrees: Degree[];
  degreeId = null;
  addDegreeForm: FormGroup;
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
      { type: 'required', message: 'Degree Name in English is required' }
    ],
    'name_arabic': [
      { type: 'required', message: 'Degree Name in arabic is required' }
    ],

  };
  constructor(
    private titleService: Title,
    private formbulider: FormBuilder,
    private degreeService: DegreeService,
    private router: Router,
    private missionService: MissionService
  ) {
    this.degreeId = "";
    this.missionService.announceMission('Add Degree');
  }

  ngOnInit() {
    this.titleService.setTitle('Add Degree');
    this.NameEnglishError = false;
    this.NameArabicError = false;
    this.addDegreeForm = this.formbulider.group({
      name_english: ['', [Validators.required]],
      name_arabic: ['', [Validators.required]]
    });

  }

  get f() { return this.addDegreeForm.controls; }

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
          "degreeName": this.f.name_english.value
        },
        {
          "language_id": environment.arabicLanguageId,
          "degreeName": this.f.name_arabic.value
        }
      ]
    }

    if (this.addDegreeForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.degreeService.createUpdate(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 54) {
          // this.router.navigate([this.returnUrl]);
          this.addDegreeForm.reset();
          if (data.statusInfo.message) {
            this.success = 'Degree has been added successfully';
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', 'Degree has been added successfully.')
          this.router.navigate(['/degrees']);
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
