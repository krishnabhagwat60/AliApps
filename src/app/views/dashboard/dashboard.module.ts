import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    DataTablesModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
