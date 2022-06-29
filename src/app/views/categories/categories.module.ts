// Angular

import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';

// import { ConsultantEditComponent } from './consultant-edit/consultant-edit.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesSubComponent } from './categories-sub/categories-sub.component';
import { StringOnlyDirective } from '../../string-only.directive';
const routes: Routes = [
  {
    path:'add',
    component: CategoriesAddComponent
  },

  {
    path:'add/:id',
    component: CategoriesAddComponent
  },

  {
    path:'edit/:id/:parentId',
    component: CategoriesEditComponent
  },

  {
    path:'edit/:id',
    component: CategoriesEditComponent
  },

  {
    path:'sub/:id',
    component: CategoriesSubComponent
  },

];


@NgModule({
  imports: [

    CategoriesRoutingModule,
    DataTablesModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FileUploadModule
  ],
  declarations: [
    CategoriesComponent,
    CategoriesAddComponent,
    CategoriesEditComponent,
    CategoriesSubComponent,
    StringOnlyDirective
  ],
  
})
export class CategoriesModule { } 