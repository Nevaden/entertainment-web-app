import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { TvPipe } from '../pipes/tv.pipe';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
  providers: [TvPipe]
})
export class TvShowsComponent implements OnInit {
  allShows: any;
  tvShows: any;
  itemIndex: any;

  constructor(private getData: DataService,
    private tvPipe: TvPipe) { }

  ngOnInit(): void {
    this.GetData();
    this.GetTVShows();
  }

  GetData(){
    return this.getData.getData().subscribe((data) =>{
      this.allShows = Object.keys(data).map(key=>{
        return {...data[key], uuid:key}
      })
      
    })
  }

  GetTVShows() {
    return this.getData.getData().subscribe((data)=>{
      this.tvShows = this.tvPipe.transform(data)
    })
  }
  updateBookmark(status: boolean,title:string){
    this.itemIndex = this.findTitleIndex(title);
    this.getData.toggleBookmark(this.itemIndex, status).subscribe((data) =>{})
  
    this.itemIndex = this.findTitleIndexTV(title);
    return this.tvShows[this.itemIndex].isBookmarked = !this.tvShows[this.itemIndex].isBookmarked
  }

  findTitleIndex(title: string){
    let titleIndex = this.allShows.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

  findTitleIndexTV(title: string){
    let titleIndex = this.tvShows.findIndex((i: { title:string; }) => i.title === title)
    return titleIndex;
  }

}
