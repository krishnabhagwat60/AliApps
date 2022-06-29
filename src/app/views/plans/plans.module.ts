// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { PlansComponent } from './plans.component';
import { PlansRoutingModule } from './plans-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PlansAddComponent } from './plans-add/plans-add.component';
import { PlansEditComponent } from './plans-edit/plans-edit.component';
import { TwoDigitDecimaNumberDirective } from './two-digit-decima-number.directive';

const routes: Routes = [
  {
    path:'add',
    component: PlansAddComponent
  },

  {
    path:'edit/:id',
    component: PlansEditComponent
  },

];


@NgModule({
  imports: [
    PlansRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    PlansComponent,
    PlansAddComponent,
    PlansEditComponent,
    TwoDigitDecimaNumberDirective
  ],
  
})
export class PlansModule{ } 