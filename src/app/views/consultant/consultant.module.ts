// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { ConsultantComponent } from './consultant.component';
import { ConsultantRoutingModule } from './consultant-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultantAddComponent } from './consultant-add/consultant-add.component';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';
import { ConsultantEditComponent } from './consultant-edit/consultant-edit.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {TwoDigitDecimaNumberDirective} from '../../two-digit-decima-number.directive';
import { ConsultantTransactionsComponent } from './consultant-transactions/consultant-transactions.component';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserModule } from '@angular/platform-browser';
import { NgDatepickerModule } from 'ng2-datepicker';
import {OneDigitDecimaNumberDirective} from "./one-digit-decima-number.directive";
import {OneDigitNumberDirective} from "./only-digit-number.directive";
const routes: Routes = [
  {
    path:'add',
    component: ConsultantAddComponent
  },

  {
    path:'edit/:id',
    component: ConsultantEditComponent
  },

  {
    path:'transactions/:id',
    component: ConsultantTransactionsComponent,
   
  },

];


@NgModule({
  imports: [

    ConsultantRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FileUploadModule,
    NgDatepickerModule,
    
  ],
  declarations: [
    ConsultantComponent,
    ConsultantAddComponent,   
    jqxDropDownListComponent, ConsultantEditComponent,
    jqxListBoxComponent,
    TwoDigitDecimaNumberDirective,
    ConsultantTransactionsComponent,
    OneDigitDecimaNumberDirective,
    OneDigitNumberDirective
  ],
  
})
export class ConsultantModule { }