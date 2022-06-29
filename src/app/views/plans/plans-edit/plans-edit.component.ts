import { Component, OnInit } from '@angular/core';
import { PlanService, MissionService } from '../../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-plans-edit',
  templateUrl: './plans-edit.component.html',
  styleUrls: ['./plans-edit.component.scss']
})
export class PlansEditComponent implements OnInit {

  planId = null;
  addPlanForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  parameters: any;
  imageSrc: any;
  planDetail: any;
  validation_messages = {
    'price': [
      { type: 'required', message: 'Price is required' },
      { type: 'pattern', message: 'Price must only in number value' },
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private missionService:MissionService
  ) {
    this.planId = "";
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.planId = this.activatedRoute.snapshot.paramMap.get("id");
      console.log(this.planId + ' paramid'); // Print the parameter to the console. 
    });

    this.missionService.announceMission('Edit Plan');
  }

  ngOnInit() {
    this.titleService.setTitle('Edit Plan');
    this.addPlanForm = this.formbulider.group({
      price: ['', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9][0-9]?)*$"), Validators.min(0.01)]],
      note: ['', []]
    });

    this.planService.getPlanById(this.planId).pipe(first()).subscribe(
      resp => {
        this.planDetail = resp;
        console.log(resp);
        this.addPlanForm.controls['price'].setValue(resp.price);
        this.addPlanForm.controls['note'].setValue(resp.note);
      },
      error => {
      }
    );
  }

  get f() { return this.addPlanForm.controls; }

  onSubmit() {
    console.log(this.f);
    this.submitted = true;
    this.parameters = {
      "planId": this.planId,
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
        if (data.statusInfo.statusCode == 53) {
         
          this.addPlanForm.reset();
          if (data.statusInfo.message) {
            this.success = "Plan updated Successfully";
            localStorage.setItem('success', 'Plan updated Successfully');
          } else {
            this.success = 'Done Successfully';
          }
           this.router.navigate(['/plans']);
        }else{
          localStorage.setItem('error', data.statusInfo.message);
        }
        this.loading = false;
        this.scrollToTop();
      },
      error => {
        this.error = 'An Error Occured'
        localStorage.setItem('error', 'An Error Occured');
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
