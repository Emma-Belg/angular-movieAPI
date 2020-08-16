import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  private API_KEY = '?api_key=67b347978ffe14fc5d6f8a664a1829f2';
  private movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
  private urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1`;

  cards$ = this.http.get(this.urlNowPlaying);
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log(this.cards$);
  }

}
