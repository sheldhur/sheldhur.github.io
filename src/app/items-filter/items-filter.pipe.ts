import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'itemsFilter'
})
export class ItemsFilterPipe implements PipeTransform {
  transform(items: string[], field?: string, query?: string): any {
    if (!query || query === '' || !field) {
      return items;
    }
    return items.filter(item => -1 < item[field].toLowerCase().indexOf(query.toLowerCase()));
  }
}
