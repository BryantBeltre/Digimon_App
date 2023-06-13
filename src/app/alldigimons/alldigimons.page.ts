import { Component} from '@angular/core';
import { DigimonserviceService } from '../service/digimonservice.service';


@Component({
  selector: 'app-alldigimons',
  templateUrl: './alldigimons.page.html',
  styleUrls: ['./alldigimons.page.scss'],
})
export class AlldigimonsPage  {
  getonedigi: Array<any> =[];

  constructor(public alldigis: DigimonserviceService)
  {

    this.alldigis.getdigimon().subscribe((resp) =>{
      this.getonedigi = resp;
      console.log(this.getonedigi);
   });
  }







}
