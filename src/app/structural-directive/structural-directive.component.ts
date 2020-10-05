import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  ngif = true;
  color="Orange";
  ca = ["red","blue","orange","green"];
  table:Array<any> = [ {name:"sahitya",mobile:8908908,branch:"civil"},
  {name:"jaggu",mobile:55908908,branch:"mech"},
  {name:"kukka",mobile:444908908,branch:"ece"}
          ] ;
  inside:any;
  constructor() {
    this.inside = [{name:"sahitya",mobile:8908908,branch:"civil",hello:["ddf","dff","vvvv"]},
    {name:"jaggu",mobile:55908908,branch:"mech",hello:["ddf","dff","vvvv"]},
    {name:"kukka",mobile:444908908,branch:"ece",hello:["ddf","dff","vvvv"]}
            ] ;
            for(let c of this.inside)
            {
              let x = (c.hello)
           for(let f of x)
           {
              console.log(f)
           }
          }
          }
   
  
  ngOnInit(): void {
  }

}
