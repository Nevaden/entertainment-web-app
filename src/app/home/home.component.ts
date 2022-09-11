import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeShows: any;
  constructor(private getData: DataService) { }


  ngOnInit(): void {
    this.GetData();
  }
  GetData(){
    return this.getData.getData().subscribe((data) =>{
      this.homeShows = Object.keys(data).map(key=>{
        return {...data[key], uuid:key}
      })
    })
  }
}
