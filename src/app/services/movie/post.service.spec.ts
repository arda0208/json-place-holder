import { Movie } from './../../models/movie/movie.class';
import { MovieListResponse } from './../../models/movie-response/movie-response.class';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from '.';
import { environment } from 'src/environments/environment';

describe('MovieService', () => {
  const url: string = `${environment.apiUrl}`;

  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    }).compileComponents();

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created MovieService', () => {
    expect(service).toBeTruthy();
  });

  it('should be created getMovies() function', () => {
    expect(service.getMovies).toBeTruthy();
  });

  it('should be created getMovieDetail() function', () => {
    expect(service.getMovieDetail).toBeTruthy();
  });

  it('should call getMovies and return an MovieListResponse object', () => {
    service.getMovies('search').subscribe((res) => {
      expect(res).toEqual(new MovieListResponse());
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: `${url}?apikey=a0b08d39&s=search&page=1`,
    });

    req.flush(new MovieListResponse());
  });

  it('should call getMovies and return an MovieListResponse object', () => {
    service.getMovieDetail('imdbID').subscribe((res) => {
      expect(res).toEqual(new Movie());
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: `${url}?apikey=a0b08d39&i=imdbID`,
    });

    req.flush(new Movie());
  });
});
