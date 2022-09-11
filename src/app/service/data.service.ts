import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  firebaseURL= 'https://entertainment-web-app-4d386-default-rtdb.firebaseio.com/'
  jsonEXT = '.json'
  
  url = `${this.firebaseURL}${this.jsonEXT}`

  
  constructor( private http: HttpClient,
    ) { }

  getData(): Observable<any>{
    return this.http.get(this.url)
  }

  // getFavorites(): Observable<any>{
  //   const url = `${this.favsUrl}${this.jsonEXT}`
  //   return this.http.get<Product>(this.url2)
  // }

  // addFavorite(newItem: any){
  //   return this.http.post<any>(this.url2, newItem)
  // }

  // deleteFav(id:any){
  //   const url3 = `${this.favsUrl}/${id}${this.jsonEXT}`
  //   console.log("delete fired")
  //   return this.http.delete(url3)
  // }

 
  }






