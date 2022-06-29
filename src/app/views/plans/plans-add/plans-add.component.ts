import { Component, OnInit } from '@angular/core';
import { PlanService, MissionService } from '../../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-plans-add',
  templateUrl: './plans-add.component.html',
  styleUrls: ['./plans-add.component.scss']
})
export class PlansAddComponent implements OnInit {


  planId = null;
  addPlanForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  parameters: any;
  imageSrc: any;
  validation_messages = {
    'price': [
      { type: 'required', message: 'Price is required' },
      { type: 'pattern', message: 'Price must be in number value' },
      { type: 'min', message: 'Price must be greater then 0' }
    ],
    'note': [
      { type: 'required', message: 'Note is required' }
    ],

  };
  constructor(
    private titleService: Title,
    private formbulider: FormBuilder,
    private planService: PlanService,
    private router: Router,
    private missionService:MissionService
  ) {
    this.planId = "";
    this.missionService.announceMission('Add Plan');
  }

  ngOnInit() {
    this.titleService.setTitle('Add Plan');
    this.addPlanForm = this.formbulider.group({
      price: ['', [Validators.required,  Validators.min(0.01)]],
      note: ['', []]
    });

  }

  get f() { return this.addPlanForm.controls; }

  onSubmit() {
    console.log(this.f);
    this.submitted = true;
    this.parameters = {
      "planId": "",
      "price": this.f.price.value,
      "note": this.f.note.value
    }

    if (this.addPlanForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.planService.createUpdate(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 54) {
         
          this.addPlanForm.reset();
          if (data.statusInfo.message) {
            this.success = "Plan added Successfully";
            
          } else {
            this.success = 'Done Successfully';
          }
          localStorage.setItem('success', "Plan added Successfully");
           this.router.navigate(['/plans']);
        }else{
          this.error =  data.statusInfo.message;
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
