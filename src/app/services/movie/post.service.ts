import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostItem } from 'src/app/models/post-item/postItem.class';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private name: string = this.constructor.name;
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostItem[]> {
    const funcname: string = this.getPosts.name;
    const apiUrl: string = `${this.baseUrl}/posts`;

    return this.http.get<PostItem[]>(apiUrl).pipe(
      map((response) =>
        response ? response.map((item) => new PostItem(item)) : []
      ),
      tap((response: PostItem[]) =>
        console.debug(this.name, funcname, 'PostList fetched:', response)
      )
    );
  }
}
