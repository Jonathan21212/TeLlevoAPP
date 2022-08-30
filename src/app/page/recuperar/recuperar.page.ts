import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private alertController : AlertController,
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
            this.navCtrl.navigateForward('home');
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
      header: 'Datos ingresados',
      message: 'Revise su email, se envio un codigo de recuperacion',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.navCtrl.navigateForward('pass');
          },
        }
      ],
    });

    await alert.present();
  }

}
