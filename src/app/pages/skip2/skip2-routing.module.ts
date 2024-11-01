import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Skip2Page } from './skip2.page';

const routes: Routes = [
  {
    path: '',
    component: Skip2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Skip2PageRoutingModule {}
