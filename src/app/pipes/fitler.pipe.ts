import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../service/data.service';

@Pipe({
  name: 'fitler'
})
export class FitlerPipe implements PipeTransform {

  constructor(getData: DataService) {
  }

  transform(value: any, filterString: string, filterField: string): any {
      if(typeof value != undefined && filterString === '' ){
          return value;
      }

    let returnArray: { title: boolean; }[] = [];

    for (const item of value) {
      let filterItem = item[filterField].toLowerCase()
      let filterStringCase = filterString.toLowerCase()
      if( filterItem.includes(filterStringCase) ){
        returnArray.push(item);
      }
  }
  return returnArray ;
  }
}