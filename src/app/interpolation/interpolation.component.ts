
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  dude:string = "sahitya" 
  amount:number = 1039
  location = window.location.href//global variables cannot be declared directly
  constructor() { }
  ga()//these are the methods
  {
    return "hello world"
  }
  ha()
  {
    return this.dude
  }

  ngOnInit(): void {
  }

}
