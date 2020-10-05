import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  learn ='Introduction';
   sendtochild="parentElement"
   otherchild=[{name:"sahitya",id:"cute"},{name:"sitya",id:"ce"}]
   childEvent=""
   otherchildEvent="replace the current element"
}
