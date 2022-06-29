import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultantComponent } from './consultant.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultantComponent,
    data: {
      title: 'Consultant'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule {}
