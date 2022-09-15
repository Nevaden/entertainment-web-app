import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { BookmarkPipe } from '../pipes/bookmark.pipe';
import { MoviePipe } from '../pipes/movie.pipe';
import { TvPipe } from '../pipes/tv.pipe';
import { pipe } from 'rxjs/internal/util/pipe';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  allShows: any;
  movies: any;
  tvShows: any;
  bookmarkedTV: any;
  bookmarkedMovies: any;
  bookmarkedShows: any;
  itemIndex: any;
  filterContent = '';
 
  constructor(private getData: DataService,
    private bookmarkPipe: BookmarkPipe,
    private moviePipe: MoviePipe,
    private tvPipe: TvPipe ) { }

  ngOnInit(): void {
      this.GetData();
      // 
      // 
      // 
  }
  GetData(){
    return this.getData.getData().subscribe((data) =>{
      this.allShows = data

      this.GetBookmarkedShows()

      // bookmarked movies
      this.GetMovies();

      // bookmarked tv shows
      this.GetTVShows();
    })
  }

  GetBookmarkedShows() {
     this.bookmarkedShows = this.bookmarkPipe.transform(this.allShows)
  }

  GetMovies() {
      this.movies = this.moviePipe.transform(this.allShows)
      this.bookmarkedMovies = this.bookmarkPipe.transform(this.movies)
  }

  GetTVShows() {
      this.tvShows = this.tvPipe.transform(this.allShows)
      this.bookmarkedTV = this.bookmarkPipe.transform(this.tvShows) 
  }

  updateBookmarkMovies(status: boolean,title:string){
    this.itemIndex = this.findTitleIndex(title);
    this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})
    this.itemIndex = this.findTitleIndexMovie(title);
    this.bookmarkedMovies[this.itemIndex].isBookmarked = !this.bookmarkedMovies[this.itemIndex].isBookmarked
    this.bookmarkedMovies.splice(this.itemIndex,1)
    return this.bookmarkedMovies
  }
  updateBookmarkTV(status: boolean,title:string){
    this.itemIndex = this.findTitleIndex(title);
    this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})
    this.itemIndex = this.findTitleIndexTV(title);
    this.bookmarkedTV[this.itemIndex].isBookmarked = !this.bookmarkedTV[this.itemIndex].isBookmarked
    this.bookmarkedTV.splice(this.itemIndex,1)
    this.itemIndex = this.findTitleIndexTV(title);
    return this.bookmarkedTV[this.itemIndex].isBookmarked = !this.bookmarkedTV[this.itemIndex].isBookmarked
  }
  findTitleIndex(title: string){
    let titleIndex = this.allShows.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

  findTitleIndexMovie(title: string){
    let titleIndex = this.bookmarkedMovies.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

  findTitleIndexTV(title: string) {
    let titleIndex = this.bookmarkedTV.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }
  consolePipes(){
    console.log(this.bookmarkedTV,"Booktv");
    console.log(this.bookmarkedMovies,"Bookmovies");
    console.log(this.allShows,"allshows");
    console.log(this.bookmarkedShows,"Bookshows");
 
  }
}
