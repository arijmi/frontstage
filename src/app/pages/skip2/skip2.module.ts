import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Skip2PageRoutingModule } from './skip2-routing.module';

import { Skip2Page } from './skip2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Skip2PageRoutingModule
  ],
  declarations: [Skip2Page]
})
export class Skip2PageModule {}
