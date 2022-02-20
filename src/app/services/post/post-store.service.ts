import { PostService } from './../post/post.service';
import { environment } from '../../../environments/environment.prod';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostItem } from 'src/app/models/post-item/postItem.class';

@Injectable({
  providedIn: 'root',
})
export class PostStoreService {
  private name: string = this.constructor.name;
  private baseUrl: string = environment.baseUrl;

  private readonly _posts = new BehaviorSubject<PostItem[]>([]);
  readonly posts$ = this._posts.asObservable();

  constructor(private postService: PostService) {
    this.fetchAll();
  }

  get posts(): PostItem[] {
    return this._posts.getValue();
  }

  set posts(val: PostItem[]) {
    this._posts.next(val);
  }

  async fetchAll(): Promise<void> {
    this.posts = await this.postService.getPosts().toPromise();
  }
}
