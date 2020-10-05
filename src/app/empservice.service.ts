import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor() { }
  getEmployee()
  {
    return [{name:"sahitya",id:1,nature:"sweet",college:"vishnu"},
    {name:"varma",id:2,nature:"good",college:"SRKR"},
    {name:"Indukuri",id:3,nature:"cute",college:"Gitam"}]
  }

  mesaam()
  {
    return "hello world"
  }
}
