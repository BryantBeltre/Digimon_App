import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';


import { OnedigimonPageRoutingModule } from './onedigimon-routing.module';

import { OnedigimonPage } from './onedigimon.page';
import { DigimonModalComponent } from '../digimon-modal/digimon-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnedigimonPageRoutingModule,

  ],
  declarations: [OnedigimonPage,DigimonModalComponent],
  exports: [
    DigimonModalComponent
  ]
})
export class OnedigimonPageModule {}
