import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrLoginPage } from './dr-login.page';

const routes: Routes = [
  {
    path: '',
    component: DrLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrLoginPageRoutingModule {}
