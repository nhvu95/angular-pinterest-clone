import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecomment'
})
export class TimeCommentPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let today = Date.now();
    var differenceInDays = (today - value.getTime()) / (1000 * 3600 * 24);
    if (differenceInDays < 7) {
      return differenceInDays + ' Day';
    } else if (((differenceInDays / 7) >= 1) && ((differenceInDays / 7) <= 52)) {
      return Math.floor(differenceInDays / 7) + ' Week';
    } else {
      return  Math.floor(differenceInDays / 365) + ' Years'
    }
  }

}
