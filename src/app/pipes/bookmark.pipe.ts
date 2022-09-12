import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookmark'
})
export class BookmarkPipe implements PipeTransform {

  transform(value: any){
    
    let returnArray: { isBookmarked: boolean; }[] = [];

    value.forEach((element: { isBookmarked: boolean; }) => {
      if(element.isBookmarked == true){
        returnArray.push(element);
      }
    })
    //console.log(returnArray)
    return returnArray;
  }

}
