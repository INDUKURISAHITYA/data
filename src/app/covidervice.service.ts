import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoviderviceService {
   public url :string = 'https://api.covid19api.com/summary'
  constructor(private http : HttpClient) { }
  getCovidInformation() :Observable<any>
  {
    return this.http.get<any>(this.url).pipe(retry(1),catchError(this.errorHandler))
  }
  errorHandler(xyz)
  {
    let errorMsg ='';
    if(xyz.error instanceof ErrorEvent)
    {
      errorMsg += `Error : ${xyz.error.message}`;   
    }
    else
    {
      errorMsg +=`Error code : ${xyz.status} and Message: ${xyz.message}`;
    }
    return throwError(errorMsg);
  }
  
}

