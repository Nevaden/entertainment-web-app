import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeTrendingPipe } from './pipes/home-trending.pipe';
import { MoviePipe } from './pipes/movie.pipe';
import { TvPipe } from './pipes/tv.pipe';
import { BookmarkPipe } from './pipes/bookmark.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvShowsComponent,
    BookmarksComponent,
    NavBarComponent,
    HomeComponent,
    HomeTrendingPipe,
    MoviePipe,
    TvPipe,
    BookmarkPipe,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviePipe,TvPipe,BookmarkPipe,HomeTrendingPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
