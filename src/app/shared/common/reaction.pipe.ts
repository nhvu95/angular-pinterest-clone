import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reaction'
})
export class ReactionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let unit = '';
    if (value >= 1000000) {
      value = value / 1000000;
      unit = 'M';
    } else if (value >= 1000) {
      value = value / 1000;
      unit = 'K';
    }
    return value + unit;
  }

}
