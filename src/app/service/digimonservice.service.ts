import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DigimonserviceService {

  url= 'https://digimon-api.vercel.app/api/digimon';
  constructor(public http: HttpClient) { }

  getdigimon(): Observable<any> {

    return this.http.get<any>(this.url);

  }
}
