import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController : AlertController,
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
      header: 'Viaje Creado',
      message: 'Viaje Publicado exitosamente!',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.nvCtrl.navigateForward('perfil-chofer');
          },
        }
      ],
    });

    await alert.present();
  }
}


