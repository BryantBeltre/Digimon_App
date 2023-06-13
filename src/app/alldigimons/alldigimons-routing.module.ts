import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlldigimonsPage } from './alldigimons.page';

const routes: Routes = [
  {
    path: '',
    component: AlldigimonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlldigimonsPageRoutingModule {}
