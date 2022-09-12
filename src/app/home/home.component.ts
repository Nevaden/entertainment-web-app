import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { MoviePipe } from '../pipes/movie.pipe';
import { TvPipe } from '../pipes/tv.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeShows: any;
  tvShows: any;
  movies: any;

  constructor(private getData: DataService,
    private tvPipe: TvPipe,
    private moviePipe: MoviePipe ) { }


  ngOnInit(): void {
    this.GetData();
    this.GetTVShows();

  }
  GetData(){
    return this.getData.getData().subscribe((data) =>{
      this.homeShows = Object.keys(data).map(key=>{
        return {...data[key], uuid:key}
      })
    })
  }

  GetTVShows() {
    return this.getData.getData().subscribe((data)=>{
      this.tvShows = this.tvPipe.transform(data)
      console.log(this.tvShows,"please")
    })
  }

  GetMovies() {
    return this.getData.getData().subscribe((data)=>{
      this.movies = this.moviePipe.transform(data)
      console.log(this.moviePipe,"please")
    })
  }

}
