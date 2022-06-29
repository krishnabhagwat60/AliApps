// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
//   {
//     path:'add',
//     component: PlansAddComponent
//   },

//   {
//     path:'edit/:id',
//     component: PlansEditComponent
//   },

];


@NgModule({
  imports: [
    ReportsRoutingModule,
    DataTablesModule,
    CommonModule,
    ChartsModule,
    // RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    ReportsComponent,
    
  ],
  
})
export class ReportsModule{ } 