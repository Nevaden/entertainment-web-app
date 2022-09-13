import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  firebaseURL= 'https://entertainment-web-app-4d386-default-rtdb.firebaseio.com/'
  jsonEXT = '.json'
  searchResults = 0;

  url = `${this.firebaseURL}${this.jsonEXT}`

  
  constructor( private http: HttpClient,
    ) { }

  getData(): Observable<any>{
    return this.http.get(this.url)
  }


  toggleBookmark(index: string, status: boolean) {
    let urlBookmark = `${this.firebaseURL}${index}${this.jsonEXT}`
    return this.http.patch<any>(urlBookmark,{isBookmarked: status})
  }


  // toggleFavoriteStatus(url: string, itemKey:string, status: Boolean) {
  //   itemKey = getItemKey(title)
  //   patch(url+itemKey,{isBookmarked: true})
  //   asdasdasd/3
  // }


 
  }






