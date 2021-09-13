import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  /**
   * This returns the object
   * for the search query.
   * @param items
   * @param term
   * @returns {any}
   */
  transform(items: any, term: any): any {
    if (term === undefined) {
      return items;
    }

    // Search through the whole object.
    return items.filter((item: any) => {
      return Object.keys(item).some(k => item[k].toString().toLowerCase().includes(term.toLowerCase()));
    });
  }
}
