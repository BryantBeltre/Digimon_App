import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreadorPageRoutingModule } from './creador-routing.module';

import { CreadorPage } from './creador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreadorPageRoutingModule
  ],
  declarations: [CreadorPage]
})
export class CreadorPageModule {}
