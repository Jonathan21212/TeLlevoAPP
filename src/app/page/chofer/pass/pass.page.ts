import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit {

  constructor(private alertController : AlertController,
              private nvCtrl : NavController ) { }

  ngOnInit() {
  }
  async jajan() {
    const alert = await this.alertController.create({
      header: 'Datos Guardados',
      message: 'Su contraseña a sido modificada correctamente!',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.nvCtrl.navigateForward('home');
          },
        }
      ],
    });

    await alert.present();
  }
}
