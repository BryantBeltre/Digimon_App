import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DigimonserviceService } from '../service/digimonservice.service';
import { EnviarService } from '../service/enviar.service';

import { ServicioDatoDigiService } from '../service/servicio-dato-digi.service';

@Component({
  selector: 'app-digimon-modal',
  templateUrl: './digimon-modal.component.html',
  styleUrls: ['./digimon-modal.component.scss'],
})
export class DigimonModalComponent implements OnInit {
  list: Array<any>= [];
  myname: string;
  myimg: string;
  mylevel: string;


  // eslint-disable-next-line max-len
  constructor(private modalControl: ModalController, private mydigi: DigimonserviceService, private dfs: ServicioDatoDigiService, private recibir: EnviarService)
  {

  }


  cerrarM(){
    this.modalControl.dismiss();
  }

  ngOnInit() {

    this.recibir.$getobjeto.subscribe(data => this.list.push(data)).unsubscribe();

    /*this.dfs.disparador.subscribe(data =>{
      this.list.push(data);
      //console.log('recibido ', data)
    });*/
}
}
