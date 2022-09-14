import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {

  transform(value: any){
    
    let returnArray: { category: string; }[] = [];

    value.forEach((element: { category: string; }) => {
      if(element.category.toLowerCase() == 'movie'){
        returnArray.push(element);
      }
    })
    return returnArray;
  }
}