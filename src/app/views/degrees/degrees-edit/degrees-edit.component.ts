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
  selector: 'app-degrees-edit',
  templateUrl: './degrees-edit.component.html',
  styleUrls: ['./degrees-edit.component.scss']
})
export class DegreesEditComponent implements OnInit {

  degrees: Degree[];
  degreeId = null;
  degreeDetail:any;
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
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private missionService:MissionService
  ) {
    this.degreeId = "";
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.degreeId = this.activatedRoute.snapshot.paramMap.get("id");
      console.log(this.degreeId + ' paramid'); // Print the parameter to the console. 
    });
    this.missionService.announceMission('Edit Degree');
  }

  ngOnInit() {
    this.titleService.setTitle('Edit Degree');
    this.NameEnglishError = false;
    this.NameArabicError = false;
    this.addDegreeForm = this.formbulider.group({
      name_english: ['', [Validators.required]],
      name_arabic: ['', [Validators.required]]
    });

    this.degreeService.getDegreeById(this.degreeId).pipe(first()).subscribe(
      resp => {
        this.degreeDetail = resp;
        this.imageSrc = resp.imageURL;
        console.log(JSON.stringify(this.degreeDetail) + ' cate');
        const name_english = resp.degree.find(x => x.languageId === environment.englishLanguageId);
        const name_arabic = resp.degree.find(x => x.languageId === environment.arabicLanguageId);

        this.addDegreeForm.controls['name_english'].setValue(name_english.lookupValue);
        this.addDegreeForm.controls['name_arabic'].setValue(name_arabic.lookupValue);
      },
      error => {
      }
    );
  }

  get f() { return this.addDegreeForm.controls; }

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
      "lookupDetailsId": this.degreeId,
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
        if (data.statusInfo.statusCode == 53) {
          // this.router.navigate([this.returnUrl]);
        
          if (data.statusInfo.message) {
            this.success = data.statusInfo.message;
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', 'Degree has been updated successfully.')
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
