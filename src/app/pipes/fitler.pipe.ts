import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fitler'
})
export class FitlerPipe implements PipeTransform {

  transform(value: any, filterString: string, filterField: string): any {

    if(value.length === 0 || filterString === ''){
      return value;
    }

    let returnArray: { title: boolean; }[] = [];

    for (const item of value) {
      if(item[filterField].includes(filterString)){
        returnArray.push(item);
      }
    }
    return returnArray;
  }
    // value.forEach((element: { title: boolean; }) => {
    //   if(element.title){
    //     returnArray.push(element);
    //   }
    // })


}
