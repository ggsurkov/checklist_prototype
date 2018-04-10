import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  public transform(value, keys: string, term: string) {
    if (!term) return value;
    const keysArr = keys.split(',');
    return (value || [])
      .filter((item) => keysArr.some(key => new RegExp(term, 'gi').test(SearchPipe.itemValueByKey(item, key))));
  }

  // нужно в случае, если в ключе несколько шагов к значению, например name.value
  private static itemValueByKey(item, key: string) {
    const keyElement = key.split('.');
    let itemValue = item;
    for (let i = 0; i < keyElement.length; i++) {
      itemValue = itemValue[keyElement[i]];
    }
    return itemValue;
  }


}
