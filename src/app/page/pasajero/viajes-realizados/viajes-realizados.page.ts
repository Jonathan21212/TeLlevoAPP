import { Component, OnInit , ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';


@Component({
  selector: 'app-viajes-realizados',
  templateUrl: './viajes-realizados.page.html',
  styleUrls: ['./viajes-realizados.page.scss'],
})
export class ViajesRealizadosPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  
  constructor() { }
  
  ngOnInit() {
  }

  confirm() {
    this.modal.dismiss(this, 'confirm');
  }
  confirm2() {
    this.modal.dismiss('confirm');
  }
  

}

