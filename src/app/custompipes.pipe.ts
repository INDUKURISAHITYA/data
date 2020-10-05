import { Pipe, PipeTransform, NgProbeToken } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value: string,hello:string): string {
    console.log(value)
    console.log(hello)
    let nat="";
    if(value == "sahitya")
    {
    nat += value+" "+" 1 "+" "+hello;
    }
    else if(value == "jaggu")
    {
      nat += value+" "+" 2 "+" "+hello;
    }
    else
    {
      nat += value+" "+" 3 "+" "+hello;
    }
    return nat;
  }

}
