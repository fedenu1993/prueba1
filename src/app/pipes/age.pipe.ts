import { Pipe, PipeTransform } from '@angular/core';
import {parse, differenceInYears} from 'date-fns'


@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {

    const valueFormat =  new Date(value);
    const age = differenceInYears(new Date(), valueFormat);
    return age;

}

}
