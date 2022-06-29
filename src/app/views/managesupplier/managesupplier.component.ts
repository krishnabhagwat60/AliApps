import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-managesupplier',
  templateUrl: './managesupplier.component.html',
  styleUrls: ['./managesupplier.component.scss']
})
export class ManagesupplierComponent implements OnInit {
  supplierForm: FormGroup;
  submitted = false;
  validation_messages = {
    'supplierName': [{ type: 'required', message: 'Supplier Name is required' }],
    'mobile': [{ type: 'required', message: 'Mobile is required' }],
    'email': [{ type: 'required', message: 'Email is required' }],
    'commissionValue': [{ type: 'required', message: 'Commission Value is required' }],
    'commissionPercentage': [{ type: 'required', message: 'Commission Percentage is required' }],
    'bankId': [{ type: 'required', message: 'BankId is required' }],
    'bankAccountHolderName': [{ type: 'required', message: 'Bank Account Holder Name is required' }],
    'bankAccount': [{ type: 'required', message: 'Bank Account is required' }],
    'iban': [{ type: 'required', message: 'Iban is required' }],
  };
  constructor(private titleService: Title,
    private formbulider: FormBuilder,
    // private configurationService: ConfigurationService,
    private router: Router,
    public _location: Location) { }

  ngOnInit() {
    this.titleService.setTitle('Manage Supplier');
    this.supplierForm = this.formbulider.group({
      supplierName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      commissionValue: ['', [Validators.required]],
      commissionPercentage: ['', [Validators.required]],
      bankId: ['', [Validators.required]],
      bankAccountHolderName: ['', [Validators.required]],
      bankAccount: ['', [Validators.required]],
      iban: ['', [Validators.required]],
    });
  }

  onSubmit() {

    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }

  }

}
