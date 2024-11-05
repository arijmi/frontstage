import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotPage } from './not.page';

const routes: Routes = [
  {
    path: '',
    component: NotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotPageRoutingModule {}
