import {Component, OnInit} from '@angular/core';

import {MovieNowPlayingService} from '../movieNowPlaying.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  //TO DO
  //Have cards that are flexible in their display and that have the image and then the title and the votes shows under the image and then when you click on it you get a description
  // maybe put in an ability to sort the movies by name or votes?





  errorMessage: string;
  private moviesNowPlaying;

  constructor(
    private movieNowPlayingService: MovieNowPlayingService
  ) {
  }

  ngOnInit(): void {
    this.movieNowPlayingService.nowPlayingMovies().subscribe({
      next: movies => {
        this.moviesNowPlaying = movies;
      },
      error: err => this.errorMessage = err
    });
  }

  getMovies() {
    return this.moviesNowPlaying;
  }

}
