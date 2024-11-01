import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordchangedPageRoutingModule } from './passwordchanged-routing.module';

import { PasswordchangedPage } from './passwordchanged.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordchangedPageRoutingModule
  ],
  declarations: [PasswordchangedPage]
})
export class PasswordchangedPageModule {}
