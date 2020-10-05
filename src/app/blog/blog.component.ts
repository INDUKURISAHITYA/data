import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 public hello;
  public employee:Array<any>=[
              {id:1,Name:"sahitya"},
              {id:2,Name:"Indukuri"},
              {id:3,Name:"vamsi"}
            ]
  constructor(private route:Router,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe((x:ParamMap)=>{this.hello=parseInt(x.get('id'))})
  }
  onSe(x)
{
  //this.route.navigate(['/Blog',x.id])//,x.Name],{queryParams:{hello:x.id},fragment:x.name});  
  this.route.navigate([x.id],{relativeTo:this.rout})
}

onselectedid(x)
{
 return x.id === this.hello;
}
}
