import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OnedigimonPage } from './onedigimon.page';

const routes: Routes = [
  {
    path: '',
    component: OnedigimonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnedigimonPageRoutingModule {}
