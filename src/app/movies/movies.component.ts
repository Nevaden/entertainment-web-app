import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { MoviePipe } from '../pipes/movie.pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allShows: any;
  constructor(private getData: DataService,
    private moviePipe: MoviePipe){ }

  ngOnInit(): void {
    this.GetData();
  }

  GetData(){
    return this.getData.getData().subscribe((data) =>{
      this.allShows = Object.keys(data).map(key=>{
        return {...data[key], uuid:key}
      })
    })
  }
}
