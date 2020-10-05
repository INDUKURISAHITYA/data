import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
   <h3>Event Binding</h3>
   <input type = "text" #myinput (click)="bx(myinput)" value="sahitya">
   <input type="button" value="click" (click) = "sa()">
   <input type="button" value="event" (click) = "la($event)">
   <input type="button" value="event-type" (click) = "ja($event.type)">
   <hr>
   <h3>Template variable reference</h3>
   <button (click)="ca(myinput.value)">Template reference Variable</button>
   <button (click)="na(myinput.type)">Template reference Variable</button>
   
   <hr>
   <h3>Two way Binding</h3>
   <input [(ngModel)]="name" type ="text" >
   {{name}}
  `,
  styles: [
  ]
})
export class EventbindingComponent implements OnInit {
 public name =""
  constructor() { }
  sa()
  {
    console.log("hello world")
  }
  la(ele)
  {
    console.log(ele)
  }
  ja(eled)
  {
    console.log(eled)
  }
  ca(kk)
  {
    console.log(kk)
  }

  na(oo)
  {
    console.log(oo)
  }
  bx(zz)
  {
    console.log(zz)
  }
  ngOnInit(): void {
  }

}
