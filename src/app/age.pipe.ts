import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    
    let currentyear = new Date().getFullYear();
    let ageyear= new Date(value).getFullYear();
    return currentyear-ageyear;
  }

}
