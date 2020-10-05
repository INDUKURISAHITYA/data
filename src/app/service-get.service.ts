import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {observable, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ServiceGetService {

  public url = "./assets/data/states.json";
   
  constructor(private code:HttpClient) { }

  getstates(): Observable<any>
   {
     return this.code.get<any>(this.url);
   }
}
