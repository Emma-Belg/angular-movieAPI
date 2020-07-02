import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {async} from 'rxjs/internal/scheduler/async';
import {Observable, throwError} from 'rxjs';
import {IMovie} from '../cards/imovie.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private API_KEY = '?api_key=67b347978ffe14fc5d6f8a664a1829f2';
  private movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
  private urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing${this.API_KEY}&language=en-US&page=1`;
  private cards$ = this.http.get<IMovie[]>(this.urlNowPlaying)
    .pipe(
      map(movies =>
          movies.results.map( movie => ({
            ...movie
          }))),
      catchError(this.handleError)
    );
constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.cards$;
  }

  getNowPlayingMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.urlNowPlaying).pipe(
      tap(data => console.log (JSON.stringify( data.map(movies => {
        return movies.title;
      }))))
      // catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  ngOnInit(): void {

  }

}
