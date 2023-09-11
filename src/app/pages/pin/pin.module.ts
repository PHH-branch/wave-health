import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinPageRoutingModule } from './pin-routing.module';

import { PinPage } from './pin.page';
import { PincodeInputModule } from  'ionic2-pincode-input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinPageRoutingModule,
    PincodeInputModule,
  ],
  declarations: [PinPage]
})
export class PinPageModule {}
