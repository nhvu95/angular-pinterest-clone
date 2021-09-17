import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value.replace(/^\S+:\/\//, '');
    value = value.replace(/\/\S+/, '');
    return value;
  }

}
