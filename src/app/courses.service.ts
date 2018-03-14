import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})

@Injectable()
export class FilterByPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.category.title.indexOf(filter) > -1);
  }
}
