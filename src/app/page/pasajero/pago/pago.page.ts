import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  constructor(private alertController: AlertController,
    private navCtrl : NavController) { }
    roleMessage= '';
  ngOnInit() {
  }
  async alerta1() {
    const alert = await this.alertController.create({
      header: 'Pago Confirmado!',
      buttons: [
        
        {
          text: 'Ok',
          role: 'Ok',
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
