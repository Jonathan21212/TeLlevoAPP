import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPasajeroPage } from './index-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPasajeroPageRoutingModule {}
