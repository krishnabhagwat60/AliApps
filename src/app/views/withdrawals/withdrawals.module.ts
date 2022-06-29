// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { WithdrawalsComponent } from './withdrawals.component';
import { WithdrawalsRoutingModule } from './withdrawals-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
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
    WithdrawalsRoutingModule,
    DataTablesModule,
    CommonModule,
    ChartsModule,
    // RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    WithdrawalsComponent,
    
  ],
  
})
export class WithdrawalsModule { }
