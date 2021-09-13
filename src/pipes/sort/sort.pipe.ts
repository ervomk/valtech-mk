import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }

    array.sort((a, b) => {
      return a[field] - b[field];
    });

    // Sorts array above and then it returns reverse if no field is provided, otherwise sorted array.
    return !field ? array.reverse() : array;
  }
}
