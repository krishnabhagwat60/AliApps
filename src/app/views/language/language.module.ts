import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LanguageComponent } from './language.component';
import { LanguageRoutingModule } from './language-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageAddComponent } from './language-add/language-add.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LanguageEditComponent } from './language-edit/language-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: LanguageAddComponent
  },

  {
    path: 'edit/:id',
    component: LanguageEditComponent
  },

];


@NgModule({
  imports: [
    LanguageRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    LanguageComponent,
    LanguageAddComponent,
    LanguageEditComponent,


  ],

})
export class LanguageModule { } 