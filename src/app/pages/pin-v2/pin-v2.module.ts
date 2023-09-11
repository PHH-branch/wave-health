import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinV2PageRoutingModule } from './pin-v2-routing.module';

import { PinV2Page } from './pin-v2.page';
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinV2PageRoutingModule,
    CodeInputModule,
  ],
  declarations: [PinV2Page]
})
export class PinV2PageModule {}
