import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagesupplierComponent } from './managesupplier.component';

const routes: Routes = [
  {
    path: '',
    component: ManagesupplierComponent,
    data: {
      title: 'Manage Supplier'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagesupplierRoutingModule { }
