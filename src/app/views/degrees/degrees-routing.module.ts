import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DegreesComponent } from './degrees.component';

const routes: Routes = [
  {
    path: '',
    component: DegreesComponent,
    data: {
      title: 'Degrees'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DegreesRoutingModule {}
