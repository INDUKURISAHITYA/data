import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-binding]',
  template: `<h3>Property Binding</h3>
             <input type="text" id="sa" value="sahitya">
             <input [disabled]="sa" type="text" id="da" [value]="nall">
             <input type="text" bind-value="nall" bind-disabled="sa">
             <hr>
             <h3>Class Binding</h3>
             <p class="text-suceess">sahitya</p>
             <p class="text-bab" [class]="binding">sahitya</p><!--class binding-->
             <p [class.text-bab]="haserror">sahitya</p><!--condition-->
             <p [ngClass]="hasopen">sahitya</p><!--Multiple condition-->
             <hr>
             <h3>Style Binding</h3>
             <p [style.color]="'orange'">sahitya</p>
             <p [style.color]="color">sahitya</p>
             <p [style.color]="haserror ? color : col">sahitya</p>
             <p [style.color]="haserror ? 'green' : 'yellow'">sahitya</p>
             <p [ngStyle]="cute">sahitya</p>
             `
             
               ,
  styles: [`.text-suceess{color:green} .text-danger{color:red} .text-bab{font-style:italic}`]
})
export class BindingComponent implements OnInit {
  nall = "good";
  sa = false;
  binding= "text-suceess";
  haserror=true;
  color="red";
  col = "orange"
  hasopen={
    "text-suceess" :this.haserror,
    "text-danger" :!this.haserror,
    "text-bab" :this.haserror
  }
  cute = {color:"red",fontStyle:"italic"}
  constructor() { }

  ngOnInit(): void {
  }

}
