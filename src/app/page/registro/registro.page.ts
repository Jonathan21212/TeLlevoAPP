import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( private alertController : AlertController,
               private navCtrl : NavController ) { }

  ngOnInit() {
  }
  async jajan() {
    const alert = await this.alertController.create({
      header: 'Datos ingresados',
      message: 'Usuario Ingresado Correctamente!',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.navCtrl.navigateForward('home');
          },
        }
      ],
    });

    await alert.present();
  }

}

