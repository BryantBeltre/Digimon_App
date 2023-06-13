import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';

import { AlldigimonsPageRoutingModule } from './alldigimons-routing.module';
import { AlldigimonsPage } from './alldigimons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlldigimonsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AlldigimonsPage]
})
export class AlldigimonsPageModule {}
