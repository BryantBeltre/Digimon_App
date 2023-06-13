import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarService {
  private obejectSource = new BehaviorSubject<any>({});

  $getobjeto = this.obejectSource.asObservable();

  constructor() { }

  sendobjeto(data: any){
    this.obejectSource.next(data);
  }
}
