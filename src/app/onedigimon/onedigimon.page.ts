import { Component, Input, OnInit } from '@angular/core';
import { DigimonserviceService } from '../service/digimonservice.service';
import { ModalController } from '@ionic/angular';
import { DigimonModalComponent } from '../digimon-modal/digimon-modal.component';
import { ServicioDatoDigiService } from '../service/servicio-dato-digi.service';
import { EnviarService } from '../service/enviar.service';

@Component({
  selector: 'app-onedigimon',
  templateUrl: './onedigimon.page.html',
  styleUrls: ['./onedigimon.page.scss'],
})
export class OnedigimonPage implements OnInit {
  getdigimon: Array<any>=[];


  // eslint-disable-next-line max-len
  constructor(public digimon: DigimonserviceService, private modalContrl: ModalController, private dii: ServicioDatoDigiService, private enviar: EnviarService)
  {
    this.digimon.getdigimon().subscribe((pe)=>{
      this.getdigimon = pe;
    });
  }


  recorer(ii: string ){

  }


 async abrirM(name: string){

  for(const i of this.getdigimon){
    if(i.name === name ){
     // console.log(i);
      this.enviar.sendobjeto(i);
      //this.dii.disparador.emit({data: i});
    }
  }


  const modal = await this.modalContrl.create({
    component: DigimonModalComponent
  });

    await modal.present();
  }

  ngOnInit() {

  }

}
