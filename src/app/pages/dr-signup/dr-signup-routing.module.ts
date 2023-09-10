import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrSignupPage } from './dr-signup.page';

const routes: Routes = [
  {
    path: '',
    component: DrSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrSignupPageRoutingModule {}
