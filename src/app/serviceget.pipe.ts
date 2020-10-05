import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceget'
})
export class ServicegetPipe implements PipeTransform {

  transform(value: any,ss: any): any {
    if(ss === "")
    {
      return value;
    }
    let Name:any=[];
    for(let fat of value)
    {
      let pp =fat.name;
      if(pp.startsWith(ss))
      {
        console.log(Name.push(fat));
      }
    }
    return Name;
  }

}
