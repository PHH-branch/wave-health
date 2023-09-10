import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrSignupPageRoutingModule } from './dr-signup-routing.module';

import { DrSignupPage } from './dr-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrSignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DrSignupPage]
})
export class DrSignupPageModule {}
