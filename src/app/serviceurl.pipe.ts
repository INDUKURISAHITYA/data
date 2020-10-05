import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceurl'
})
export class ServiceurlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
