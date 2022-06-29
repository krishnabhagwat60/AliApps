// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FeedbackComponent } from './feedback.component';
import {FeedbackRoutingModule } from './feedback-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FeedbackViewComponent } from './feedback-view/feedback-view.component';


const routes: Routes = [
//   {
//     path:'add',
//     component: DegreesAddComponent
//   },

  {
    path:'view/:id',
    component: FeedbackViewComponent
  },

];


@NgModule({
  imports: [
    FeedbackRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    FeedbackComponent,
    FeedbackViewComponent     
  ],
  
})
export class FeedbackModule{ } 