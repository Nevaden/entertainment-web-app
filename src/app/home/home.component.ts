import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { MoviePipe } from '../pipes/movie.pipe';
import { TvPipe } from '../pipes/tv.pipe';
import { HomeTrendingPipe } from '../pipes/home-trending.pipe';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeShows: any;
  movies: any;
  filterContent = '';
  itemIndex: any;
  trending: any;

  constructor(private getData: DataService,
    private tvPipe: TvPipe,
    private moviePipe: MoviePipe,
    private trendingPipe: HomeTrendingPipe ) { }


  ngOnInit(): void {
    this.GetData();
    this.GetTrending();
  }

  GetData(){
    return this.getData.getData().subscribe((data) =>{
      this.homeShows = Object.keys(data).map(key=>{
        return {...data[key], uuid:key}
      })
    })
  }

  GetTrending() {
    return this.getData.getData().subscribe((data)=>{
      this.trending = this.trendingPipe.transform(data)
    })
  }

  updateBookmark(status: boolean,title:string){
    this.itemIndex = this.findTitleIndex(title);
    this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})

    return this.homeShows[this.itemIndex].isBookmarked = !this.homeShows[this.itemIndex].isBookmarked
  }

  findTitleIndex(title: string){
    let titleIndex = this.homeShows.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

  findTitleIndexMovie(title: string){
    let titleIndex = this.movies.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }
 

}
