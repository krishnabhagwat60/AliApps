// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAddComponent } from './admin-add/admin-add.component';
//import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
//import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import {TwoDigitDecimaNumberDirective} from '../../two-digit-decima-number.directive';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserModule } from '@angular/platform-browser';
import { NgDatepickerModule } from 'ng2-datepicker';
const routes: Routes = [
  {
    path:'add',
    component: AdminAddComponent
  },

  {
    path:'edit/:id',
    component: AdminEditComponent
  },

];


@NgModule({
  imports: [

    AdminRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FileUploadModule,
    NgDatepickerModule,
    
  ],
  declarations: [
    AdminComponent,
    AdminAddComponent,   
//    jqxDropDownListComponent, 
    AdminEditComponent,
  //  jqxListBoxComponent,
//    TwoDigitDecimaNumberDirective,
  ],
  
})
export class AdminModule { }