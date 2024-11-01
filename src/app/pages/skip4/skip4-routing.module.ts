import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Skip4Page } from './skip4.page';

const routes: Routes = [
  {
    path: '',
    component: Skip4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Skip4PageRoutingModule {}
