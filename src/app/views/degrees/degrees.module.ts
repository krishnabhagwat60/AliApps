// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { DegreesComponent } from './degrees.component';
import { DegreesRoutingModule } from './degrees-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DegreesAddComponent } from './degrees-add/degrees-add.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DegreesEditComponent } from './degrees-edit/degrees-edit.component';
import { StringOnlyDirective } from './string-only1.directive';
const routes: Routes = [
  {
    path:'add',
    component: DegreesAddComponent
  },

  {
    path:'edit/:id',
    component: DegreesEditComponent
  },

];


@NgModule({
  imports: [
    DegreesRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    DegreesComponent,
    DegreesAddComponent,
    DegreesEditComponent,
    StringOnlyDirective
  
  ],
  
})
export class DegreesModule{ } 