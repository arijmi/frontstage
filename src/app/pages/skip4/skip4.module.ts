import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Skip4PageRoutingModule } from './skip4-routing.module';

import { Skip4Page } from './skip4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Skip4PageRoutingModule
  ],
  declarations: [Skip4Page]
})
export class Skip4PageModule {}
