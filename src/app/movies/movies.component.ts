import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { MoviePipe } from '../pipes/movie.pipe';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  filterContent = '';
  allShows: any;
  movies: any;
  itemIndex: any;
  constructor(private getData: DataService,
    private moviePipe: MoviePipe){ }

  ngOnInit(): void {
    this.GetData();
    this.GetMovies();
  }

  GetData(){
    return this.getData.getData().subscribe((data) =>{
      this.allShows = data
      this.GetMovies()
    })
  }
  

  GetMovies() {
      this.movies = this.moviePipe.transform(this.allShows)
  }

  updateBookmark(status: boolean,title:string){
    this.itemIndex = this.findTitleIndex(title);
    this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})
    this.itemIndex = this.findTitleIndexMovie(title);
    return this.movies[this.itemIndex].isBookmarked = !this.movies[this.itemIndex].isBookmarked
  }

  findTitleIndex(title: string){
    let titleIndex = this.allShows.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

  findTitleIndexMovie(title: string){
    let titleIndex = this.movies.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }
}