import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinV2Page } from './pin-v2.page';

const routes: Routes = [
  {
    path: '',
    component: PinV2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinV2PageRoutingModule {}
