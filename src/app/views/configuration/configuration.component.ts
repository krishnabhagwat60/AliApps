import { Component, OnInit } from '@angular/core';
import { ConfigurationService, MissionService } from '../../_services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
declare var $;


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  addConfigurationForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  parameters: any;
  displayPopup=false;
  validation_messages = {
    'minimum_withdrawal_amount_request': [
      { type: 'required', message: 'Minimum Withdrawal Amount is required' },
      { type: 'pattern', message: 'Minimum Withdrawal Amount must only in number value' }
    ],
    'admin_email_address_for_notify': [
      { type: 'required', message: 'Email Address is required' },
      { type: 'pattern', message: 'Email Address is not correct' }
    ],
    'whatsapp_mobile_no': [
      { type: 'required', message: 'WhatsApp Number is required' },
      { type: 'pattern', message: 'WhatsApp Number is not valid' }
    ]

  };
  constructor(
    private titleService: Title,
    private formbulider: FormBuilder,
    private configurationService: ConfigurationService,
    private router: Router,
    public _location: Location,
    private missionService: MissionService) {
    this.missionService.announceMission('Configuration');

  }

  ngOnInit() {
    this.titleService.setTitle('Configuration')
    this.addConfigurationForm = this.formbulider.group({
      system_configuration_Id: ['', [Validators.required]],
      minimum_withdrawal_amount_request: ['', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9][0-9]?)*$")]],
      admin_email_address_for_notify: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      whatsapp_mobile_no: ['', [Validators.required, Validators.pattern('^\\+[0-9]+$')]]
    });

    this.configurationService.getSystemConfiguration().subscribe(response => {
      this.addConfigurationForm.patchValue(response);
    });

    this.success = localStorage.getItem('success');
    this.error = localStorage.getItem('error');
    localStorage.removeItem('success');
    localStorage.removeItem('error');

    if(this.success == null && this.error == null){
      this.displayPopup = true;
    }

    setTimeout (() => {
      this.displayPopup = true;
   }, 3000);
    
  }

  get f() { return this.addConfigurationForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.addConfigurationForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = '';
    this.error = '';

    this.configurationService.editSystemConfiguration(this.addConfigurationForm.getRawValue()).pipe(first()).subscribe(

      data => {
        if (data.statusInfo.statusCode == 53) {
          // this.addConfigurationForm.reset();
          localStorage.setItem('success', 'Configuration has been saved successfully.');
          this.refresh();
        }
        this.loading = false;
      },
      error => {
        this.error = 'An Error Occured'
        this.loading = false;
      });

  }

  refresh(): void {
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this._location.path())]);
    })
  }

}
