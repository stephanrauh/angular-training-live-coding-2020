import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sixItems',
})
export class SixItemsPipe implements PipeTransform {
  public transform(value: string[]): string[] {
    if (value.length > 6) {
      return [...value.slice(0, 6), '...'];
    }
    return value;
  }
}
