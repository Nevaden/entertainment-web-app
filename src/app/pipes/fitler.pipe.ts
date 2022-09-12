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
      let filterItem = item[filterField].toLowerCase()
      let filterStringCase = filterString.toLowerCase()
      if( filterItem.includes(filterStringCase) ){
        returnArray.push(item);
       
      }
  
    
  }
  console.log(returnArray)
  return returnArray;
}
    // value.forEach((element: { title: boolean; }) => {
    //   if(element.title){
    //     returnArray.push(element);
    //   }
    // }


}
