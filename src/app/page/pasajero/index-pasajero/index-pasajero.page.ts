import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-index-pasajero',
  templateUrl: './index-pasajero.page.html',
  styleUrls: ['./index-pasajero.page.scss'],
})
export class IndexPasajeroPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  detalle(){
    this.navCtrl.navigateForward("detalle-viaje");
  }

}
