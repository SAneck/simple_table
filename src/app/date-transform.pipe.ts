import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'dateTransform',
  standalone: true
})
export class DateTransformPipe implements PipeTransform {

  transform(value: number) {
    return value
  }

}
