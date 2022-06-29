import { Component, OnInit } from '@angular/core';
import { FeedbackService, MissionService } from '../../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.scss']
})
export class FeedbackViewComponent implements OnInit {

  feedbackId = null;
  feedbackDetail: any;
  addDegreeForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  parameters: any;
  imageSrc: any;
  validation_messages = {
    'name_english': [
      { type: 'required', message: 'Name in English is required' }
    ],
    'name_arabic': [
      { type: 'required', message: 'Name in arabic is required' }
    ],

  };
  constructor(
    private titleService: Title,
    private formbulider: FormBuilder,
    private feedbackService: FeedbackService,
    private activatedRoute: ActivatedRoute,
    private missionService: MissionService
  ) {
    this.feedbackId = "";
    this.activatedRoute.queryParams.subscribe(params => {
      // this.consultantId = params['id'];
      this.feedbackId = this.activatedRoute.snapshot.paramMap.get("id");
      console.log(this.feedbackId + ' paramid'); // Print the parameter to the console. 
    });
    this.missionService.announceMission('Feedback Detail');
  }

  ngOnInit() {
    this.titleService.setTitle('Feedback Detail');
    this.addDegreeForm = this.formbulider.group({
      name_english: ['', [Validators.required]],
      name_arabic: ['', [Validators.required]]
    });

    this.feedbackService.getFeedbackById(this.feedbackId).pipe(first()).subscribe(
      resp => {
        this.feedbackDetail = resp;
        this.imageSrc = resp.image;
      },
      error => {
      }
    );
  }
}
