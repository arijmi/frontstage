import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Skip1Page } from './skip1.page';

const routes: Routes = [
  {
    path: '',
    component: Skip1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Skip1PageRoutingModule {}
