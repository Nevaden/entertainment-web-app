import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HomeTrendingPipe } from '../pipes/home-trending.pipe';
import { StopProagationDirective } from '../stop-proagation.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedIndex: any;
  homeShows: any;
  movies: any;
  filterContent = '';
  itemIndex: any;
  trending: any = [{thumbnail: {regular:{large:""}}},{thumbnail: {regular:{large:""}}}];
  currentTrend = 0;
  nextThumb = 1;
  trendingImg1: any = 0;
  trendingImg2: any = 1;

 
  emptyToggle = true;
  fullToggle = false;
  updateObject: any;

  constructor(private getData: DataService,
    private trendingPipe: HomeTrendingPipe ) { }


  ngOnInit(): void {
    this.GetData();
    this.GetTrending();
  }

  GetData(){
    this.getData.getData().subscribe((data) =>{
      this.homeShows = Object.keys(data).map(key=>{
        return {...data[key], uuid:key}
      })
    })
  }

  GetTrending() {
   this.getData.getData().subscribe((data)=>{
      return this.trending = this.trendingPipe.transform(data)
    })
  }

  updateBookmark(status: boolean,title:string){
    this.itemIndex = this.findTitleIndexTrending(title);
    console.log(this.itemIndex)

    if (this.itemIndex != -1) {
      this.trending[this.itemIndex].isBookmarked = !this.trending[this.itemIndex].isBookmarked
    }
    

    this.itemIndex = this.findTitleIndex(title);

    this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})
 
    return this.homeShows[this.itemIndex].isBookmarked = !this.homeShows[this.itemIndex].isBookmarked
  }

  updateTrendingBookmark(status: boolean,title:string){
   
   this.itemIndex = this.findTitleIndex(title);
   Object.keys(status).forEach(key =>{let keyValue = key});
   this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})
   
   this.itemIndex = this.findTitleIndex(title);
   this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})
   this.homeShows[this.itemIndex].isBookmarked = !this.homeShows[this.itemIndex].isBookmarked

   this.findTitleIndexTrending(title);
   return this.trending[this.itemIndex].isBookmarked = !this.trending[this.itemIndex].isBookmarked
 
  }

  findTitleIndexTrending(title: string){
    let titleIndex = this.trending.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

  findTitleIndex(title: string){
    let titleIndex = this.homeShows.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

  findTitleIndexMovie(title: string){
    let titleIndex = this.movies.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }
 

  nextTrend() {
    const next = this.currentTrend + 1;
    const nextImage = this.nextThumb + 1
    this.currentTrend = next === this.trending.length ? 0 : next;
    this.nextThumb = next === this.trending.length ? 0 : next;
  }


  cycleTrending(){
    if (this.trendingImg1 == this.trending.length-1){
      this.trendingImg1 = 0 
    } else {
      this.trendingImg1++;
    }

    if (this.trendingImg2 == this.trending.length-1){
      this.trendingImg2 = 0 
    } else {
      this.trendingImg2++;
    }
  }
}
