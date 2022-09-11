import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeTrending'
})
export class HomeTrendingPipe implements PipeTransform {

  transform(value: any) {

    let returnArray: { isTrending: boolean; }[] = [];

    value.forEach((element: { isTrending: boolean; }) => {
      if(element.isTrending == true){
        returnArray.push(element);
      }
    })

    return returnArray;


  }

}
