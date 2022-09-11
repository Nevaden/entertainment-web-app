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
      console.log(this.tvShows,"please")
    })
  }
  updateBookmark(status: boolean,title:string){

  }

}
