import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdListModule, MdLineModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdListModule,
    MdLineModule
  ],
  declarations: [MoviesListComponent, MovieComponent],
  providers: [MoviesService]
})

export class MoviesModule { }
