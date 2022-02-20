import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PostService } from '.';
import { environment } from 'src/environments/environment';

describe('PostService', () => {
  const url: string = `${environment.baseUrl}`;

  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    }).compileComponents();

    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created PostService', () => {
    expect(service).toBeTruthy();
  });

  it('should be created getPosts() function', () => {
    expect(service.getPosts).toBeTruthy();
  });

  it('should call getPosts and return an array', () => {
    service.getPosts().subscribe((res) => {
      expect(res).toEqual([]);
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: `${url}/posts`,
    });

    req.flush([]);
  });
});
