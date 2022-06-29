import { Component, OnInit } from '@angular/core';
import { NotificationService, MissionService } from '../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  addNotificationForm: FormGroup;
  loading = false;
  submitted = false;
  allUsers : [];
  error = '';
  success = '';
  parameters: any;
  imageSrc: any;
  displayPopup = false;
  TitleError: boolean;
  MessageError: boolean;
  validation_messages = {
    // 'title': [
    //   { type: 'required', message: 'Title is required' }
    // ],
    'message': [
      { type: 'required', message: 'Message is required' }
    ],

  };
  constructor(
    private titleService: Title,
    private formbulider: FormBuilder,
    private notificationService: NotificationService,
    private missionService: MissionService

  ) {

    this.missionService.announceMission('Notification');
  }

  ngOnInit() {
    this.titleService.setTitle('Notification');
    this.TitleError = false;
    this.MessageError = false;
    if (this.success == null) {
      this.displayPopup = true;
    }
    this.addNotificationForm = this.formbulider.group({
      message: ['', [Validators.required]],
      providerId : [''],
      type: [''],
      gender : [''],
      searchType : '',
      userType: ['']
    });

    setTimeout(() => {
      this.displayPopup = true;
      console.log('settime fiif');
    }, 3000);
    this.notificationService.getAllProvider()
      .pipe(first())
      .subscribe(
        resp => {
          this.allUsers = resp;
          //console.log(JSON.stringify(this.categories) + ' cate');

        },
        error => {
        });

  }


  get f() { return this.addNotificationForm.controls; }

  onSubmit() {
    console.log(this.f);
    this.submitted = true;
    this.TitleError = false;
    this.MessageError = false;

    this.parameters = {
      "title": '',
      "providerId" :this.f.providerId.value, 
      "message": this.f.message.value,
    }

    if (this.addNotificationForm.invalid) {
      return;
    }

    if (this.f.message.value.trim() == '') {
      this.MessageError = true;
      return false;
    }
    this.loading = true;
    this.success = '';
    this.error = '';

    this.notificationService.create(this.parameters).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 10) {
          // this.router.navigate([this.returnUrl]);
          this.addNotificationForm.reset();
          if (data.statusInfo.message) {
            // this.success = data.statusInfo.message;
            localStorage.setItem('success', 'Notificatin has been sent Successfully');
            this.displayPopup = false;
            this.success = 'Notificatin has been sent Successfully';
          } else {
            this.success = 'Done Successfully';
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

    this.success = localStorage.getItem('success');

    localStorage.removeItem('success');
    if (this.success == null) {
      this.displayPopup = true;
    }
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
}
