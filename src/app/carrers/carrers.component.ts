import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.css']
})
export class CarrersComponent implements OnInit {
 public parameter;
 public name;
  constructor(private rout:ActivatedRoute,private router:Router,private htt:HttpClient) { }

  ngOnInit(): void {
   //this.parameter= parseInt(this.rout.snapshot.paramMap.get('xx'));
    this.rout.paramMap.subscribe((x:ParamMap)=>{this.parameter=parseInt(x.get('xx'))})
  }
  
 previous()
 { 
   let id = this.parameter-1;
    this.router.navigate(['/Blog',id])
   
 }

 next()
 {
  let ss = this.parameter+1;
 // this.router.navigate(['/Blog',ss])
 }

 back()
 {
   let selectid = this.parameter ? this.parameter : null;
  // this.router.navigate(['/Blog-li',{id:selectid}])
   this.router.navigate(['../',{id:selectid,hello:'sahitya'}],{relativeTo:this.rout});
 }
 contact()
 {
   this.router.navigate(['contact'],{relativeTo:this.rout})
 }
 over()
 {
   this.router.navigate(['over'],{relativeTo:this.rout})
 }
}
