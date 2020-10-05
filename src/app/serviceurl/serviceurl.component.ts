import { Component, OnInit } from '@angular/core';
import {ServiceurlService} from '../serviceurl.service'

@Component({
  selector: 'app-serviceurl',
  templateUrl: './serviceurl.component.html',
  styleUrls: ['./serviceurl.component.css']
})
export class ServiceurlComponent implements OnInit {
  datafromurl=[];
  error:string='';
 
  constructor(private getsurl:ServiceurlService) { }

  ngOnInit(): void {
    this.getsurl.geturl().subscribe(x =>this.datafromurl =x,y => this.error =y )
  }

ga(vale)
{
 console.log(vale) ;
}


}
