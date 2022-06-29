// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { NotificationComponent } from './notification.component';
import {NotificationRoutingModule } from './notification-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



const routes: Routes = [
//   {
//     path:'add',
//     component: DegreesAddComponent
//   },

//   {
//     path:'view/:id',
//     component: FeedbackViewComponent
//   },

];


@NgModule({
  imports: [
    NotificationRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    NotificationComponent  
  ],
  
})
export class NotificationModule{ } 