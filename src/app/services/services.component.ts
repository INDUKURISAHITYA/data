import { Component, OnInit } from '@angular/core';
import {EmpserviceService} from '../empservice.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  employee = [];
  banner="";
  constructor(private message:EmpserviceService) 
  { 
    
  }

  ngOnInit(): void {
    this.employee=this.message.getEmployee()
    this.banner=this.message.mesaam()
  }

}
