import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagesupplierComponent } from './managesupplier.component';
import { ManagesupplierRoutingModule } from './managesupplier-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes: Routes = [

];

@NgModule({
  declarations: [ManagesupplierComponent],
  imports: [
    ManagesupplierRoutingModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class ManagesupplierModule { }
