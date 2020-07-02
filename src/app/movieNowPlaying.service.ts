import { Injectable } from '@angular/core';
import {IMovie} from './cards/imovie.interface';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieNowPlayingService {

  private API_KEY = '?api_key=67b347978ffe14fc5d6f8a664a1829f2';
  private urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing${this.API_KEY}&language=en-US&page=1`;
  private cards$: Observable<IMovie> = this.http.get<IMovie[]>(this.urlNowPlaying)
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

  nowPlayingMovies(){
    return this.cards$;
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
