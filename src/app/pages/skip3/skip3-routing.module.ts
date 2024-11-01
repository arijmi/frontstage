import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Skip3Page } from './skip3.page';

const routes: Routes = [
  {
    path: '',
    component: Skip3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Skip3PageRoutingModule {}
