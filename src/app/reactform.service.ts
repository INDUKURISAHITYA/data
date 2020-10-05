import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { throwError,} from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReactformService {
   public url='https://angularpostajob.firebaseio.com/react.json';

  constructor(public http:HttpClient) { }

  reactdata(user)
  {
   return this.http.post(this.url,user);
  }


}
