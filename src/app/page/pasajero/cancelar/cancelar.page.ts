import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.page.html',
  styleUrls: ['./cancelar.page.scss'],
})
export class CancelarPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController,
              private nvCtrl : NavController) { }

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
            this.jajan();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  async jajan() {
    const alert = await this.alertController.create({
      header: 'Viaje Cancelado',
      message: 'Viaje Cancelado exitosamente!',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.nvCtrl.navigateForward('perfil');
          },
        }
      ],
    });

    await alert.present();
  }

}
