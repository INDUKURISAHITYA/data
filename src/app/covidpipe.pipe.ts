import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covidpipe'
})
export class CovidpipePipe implements PipeTransform {

  transform(value:any,sName: string): any {
   
    if(sName === '')
    {
      return value;
    }
   
    const countries:Array<any>=[];
    for(let i=0;i<value.length;i++)
    {
      let countryName:string = value[i].Country;
      if(countryName.startsWith(sName))
      {
        countries.push(value[i])
      }
     
    }
    return countries;
  }

}
