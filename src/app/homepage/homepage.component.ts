import {Component, OnInit} from '@angular/core';

import {MovieNowPlayingService} from '../movieNowPlaying.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

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
