import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPasajeroPageRoutingModule } from './index-pasajero-routing.module';

import { IndexPasajeroPage } from './index-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPasajeroPageRoutingModule
  ],
  declarations: [IndexPasajeroPage]
})
export class IndexPasajeroPageModule {}
