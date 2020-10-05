import { Component, OnInit } from '@angular/core';
import { ServiceGetService} from '../service-get.service'

@Component({
  selector: 'app-service-get',
  templateUrl: './service-get.component.html',
  styleUrls: ['./service-get.component.css']
})
export class ServiceGetComponent implements OnInit {
 public srrr:any=[];
  public name:any='';
  constructor(private states:ServiceGetService){  }

  ngOnInit(): void {
   this.states.getstates().subscribe(data => this.srrr = data);  
  }
  sa()
  {
    console.log(this.srrr[0].colors.likes)
  }
 
      }
