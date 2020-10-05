import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentiteraction',
  templateUrl: './componentiteraction.component.html',
  styleUrls: ['./componentiteraction.component.css']
})
export class ComponentiteractionComponent implements OnInit {

 @Input('parentData') public sendtochild:string;
 @Input('parentData') public otherchild;
 @Output() public childevent = new EventEmitter();
 @Output() public otherchildevent = new EventEmitter()
 prop = {color:"red",fontStyle:"italic",fontWeight:"bold"}
 othed=[{name:"sahitya",id:"cute"},{name:"sitya",id:"ce"}]
  constructor() { }
  sa(kk)
  {
    this.childevent.emit(kk)
  }
  ka()
  {
    this.otherchildevent.emit(this.othed)
  }
  vv(l)
  {
    console.log(l)
  }
  ngOnInit(): void {
  }

}
