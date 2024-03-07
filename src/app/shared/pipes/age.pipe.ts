import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    let currentYear: any = new Date().getFullYear();
    let dobUser: any = new Date(value).getFullYear();
    return currentYear - dobUser;
  }

}
