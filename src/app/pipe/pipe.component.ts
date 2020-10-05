import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
 othchild=[{name:"sahitya",id:"cute",status:true,dob:'1995-11-29'},{name:"jaggu",id:"cu",status:true,dob:'1992-03-29'},{name:"varma",id:"sweet",status:true,dob:'1995-01-19'}]
  pipe="piPe"
  DOB=new Date()
  mobile="8185039099"
  slice="From this App we are getting updates continue thanks for that but the other end this App not properly respond even we have full bandwidth of internet,it's take 1min time to open the application..so I request your team resolve this issue.."
  
  constructor() { }
  
  ngOnInit(): void {
  }

}

