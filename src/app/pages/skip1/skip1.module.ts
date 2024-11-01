import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Skip1PageRoutingModule } from './skip1-routing.module';

import { Skip1Page } from './skip1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Skip1PageRoutingModule
  ],
  declarations: [Skip1Page]
})
export class Skip1PageModule {}
