import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceurlService {
 public getUrl = "https://api.covid19api.com/countries"
  constructor(private call:HttpClient) { 
    
  }

  geturl():Observable<any>
  {
    return this.call.get<any>(this.getUrl).pipe(retry(1),catchError(this.getError))
  }
  getError(xyz)
  {
    let sa:string="";
    if(xyz.error instanceof ErrorEvent)
    {
      sa += "Error"+xyz.error.message;
    }
    else
    {
      sa += "Error"+xyz.status+"message"+xyz.message;
    }
    return throwError(sa) 
  }
}
