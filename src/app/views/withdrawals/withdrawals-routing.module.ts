import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawalsComponent } from './withdrawals.component';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalsComponent,
    data: {
      title: 'Reports'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawalsRoutingModule {}
