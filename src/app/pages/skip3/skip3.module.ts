import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Skip3PageRoutingModule } from './skip3-routing.module';

import { Skip3Page } from './skip3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Skip3PageRoutingModule
  ],
  declarations: [Skip3Page]
})
export class Skip3PageModule {}
