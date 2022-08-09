import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupCallPage } from './pickup-call.page';

const routes: Routes = [
  {
    path: '',
    component: PickupCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupCallPageRoutingModule {}
