import { Component, OnInit } from '@angular/core';
import { CoviderviceService} from '../covidervice.service'

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  public covidInfo:any=[];
  public errorMsg:string ='';
  public country:string =''
  constructor(private covid:CoviderviceService) { }

  ngOnInit(): void {
    this.covid.getCovidInformation().subscribe
    (
      data => this.covidInfo = data,
       error => this.errorMsg = error
     )
  }

}
