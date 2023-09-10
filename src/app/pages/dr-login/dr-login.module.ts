import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrLoginPageRoutingModule } from './dr-login-routing.module';

import { DrLoginPage } from './dr-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DrLoginPage]
})
export class DrLoginPageModule {}
