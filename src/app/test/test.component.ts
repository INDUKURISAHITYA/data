import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<div>hello world</div><p>jippi{{title}}</p><div>bbbb{{ga()}}</div>
  <div>Total add {{vamp+cute}} <br>substraction {{vamp-cute}} <br>multiplication{{vamp*cute}} <br> function{{ha()}}<br>{{6+8}}</div>`,
  styles: [`div{color:blue} p{color:green}`]
})
export class TestComponent implements OnInit {
  public title = "cute"
  public vamp =20
  public cute=30
  constructor() { }
   ga()
   {
     return this.title
   }
   ha()
   {
     return this.vamp*this.cute
   }
  ngOnInit(): void {
  }

}
