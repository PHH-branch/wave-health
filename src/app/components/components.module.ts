import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmptyBoxComponent } from './empty-box/empty-box.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [EmptyBoxComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EmptyBoxComponent
  ]
})
export class ComponentsModule { }
