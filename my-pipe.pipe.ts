import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    console.log(value);
    return value?value:"not exist";
  }

}
