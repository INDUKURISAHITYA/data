import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidemobile'
})
export class HidemobilePipe implements PipeTransform {

  transform(value: string, hide: number): string {
    console.log(value)
    console.log(hide)
    let str="";
    for(let i=0;i<value.length;i++)
    {
      if(i <= hide)
      {
        str += value[i]
      }
      else
      {
        str += "X"
      }
    }
    return str
  }

}
