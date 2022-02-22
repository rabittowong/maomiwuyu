import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datex',
})
export class DatexPipe implements PipeTransform {
  transform(value: Date, format: string): string {
    return value ? moment(value).format(format) : '';
  }
}
