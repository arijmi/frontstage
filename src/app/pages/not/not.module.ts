import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotPageRoutingModule } from './not-routing.module';

import { NotPage } from './not.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotPageRoutingModule
  ],
  declarations: [NotPage]
})
export class NotPageModule {}
