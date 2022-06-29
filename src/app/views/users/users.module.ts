// Angular

import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UsersTransactionsComponent } from './users-transactions/users-transactions.component';
import { TwoDigitDecimaNumberDirective1 } from './two-digit-decima-number.directive1';
const routes: Routes = [
  {
    path:'add',
    component: UserAddComponent
  },
  {
    path:'transactions/:id',
    component: UsersTransactionsComponent
  },

];


@NgModule({
  imports: [

    UsersRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    UserAddComponent,
    UsersTransactionsComponent,
    TwoDigitDecimaNumberDirective1
    
  ]
})
export class UsersModule { }