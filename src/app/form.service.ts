import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Form} from './form'
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

   private url='https://angularpostajob.firebaseio.com/pull.json'
  constructor(private http:HttpClient) { }

  savedata(user:Form)
  {
    return this.http.post<any>(this.url,user).pipe(catchError(this.errorHandler));
  }

  errorHandler(err:HttpErrorResponse)
  {
    return throwError(err)
  }

  getdata()
  {
    return this.http.get<any>(this.url).pipe(map(responsedata =>{const postArray:any=[];
        for(const key in responsedata)
        {            
           postArray.push(responsedata[key]); 
        }
        return postArray;
    }))
  }
  deletepost()
  {
    return this.http.delete(this.url)
  }
}
