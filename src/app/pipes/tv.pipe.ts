import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tv'
})
export class TvPipe implements PipeTransform {

  transform(value: any){
    
    let returnArray: { category: string; }[] = [];

    value.forEach((element: { category: string; }) => {
      if(element.category.toLowerCase() == 'tv series'){
        returnArray.push(element);
      }
    })
    return returnArray;
  }

}
