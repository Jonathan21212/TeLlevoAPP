import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController,
              private navCtrl : NavController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Esta Seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            this.handlerMessage = 'Cancelado!';
          },
        },
        {
          text: 'Confirmar',
          role: 'confirmar',
          handler: () => {
            this.alerta1();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async alerta1() {
    const alert = await this.alertController.create({
      header: 'Seleccione Metodo de Pago',
      buttons: [
        {
          text: 'Efectivo',
          role: 'Efectivo',
          handler: () => {
            this.alerta2();
          },
        },
        {
          text: 'Tarjeta',
          role: 'Tarjeta',
          handler: () => {
            this.navCtrl.navigateForward('pago');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  async alerta2() {
    const alert = await this.alertController.create({
      header: 'Pago en Efectivo',
      message:'Realice el pago al chofer una vez terminado el viaje!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.navCtrl.navigateForward('perfil');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}


