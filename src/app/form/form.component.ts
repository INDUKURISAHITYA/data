import { Component, OnInit } from '@angular/core';
import {Form} from '../form';
import {FormService} from '../form.service'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 private error='';
 public loadpost:any =[];
 private success='';
 public isloading =false;
 fetch()
 {
  this.forms.getdata().subscribe(data => this.loadpost =data)
 }
 sa()
 {
   this.fetch()
 }
  constructor(private forms:FormService) { }
  public form = new Form('','','' ,'','')
  ngOnInit(): void {  
    this.fetch()
  }
 onsubmit()
 {
   this.forms.savedata(this.form).subscribe
   (data =>console.log(data),error =>this.error =error.statusText ); 
  
 }
 la()
 {
   this.forms.deletepost().subscribe(()=>this.loadpost=[])
 }
 
}
