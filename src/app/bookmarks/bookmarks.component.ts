import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { BookmarkPipe } from '../pipes/bookmark.pipe';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  allShows: any;
  constructor(private getData: DataService,
    private bookmarkPipe: BookmarkPipe ) { }

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
