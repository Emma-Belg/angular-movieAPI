import { TestBed } from '@angular/core/testing';

import { MovieNowPlayingService } from './movieNowPlaying.service';

describe('MovieService', () => {
  let service: MovieNowPlayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieNowPlayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
