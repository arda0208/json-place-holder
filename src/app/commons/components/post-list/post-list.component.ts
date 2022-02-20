import { PostItem } from '../../../models/post-item/postItem.class';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  public postList: PostItem[] = [];
  private postSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.subscribeToPostList();
  }

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe();
  }

  private subscribeToPostList(): void {
    this.postSubscription = this.postService
      .getPosts()
      .subscribe((postItemList) => {
        this.postList = postItemList;
      });
  }
}
