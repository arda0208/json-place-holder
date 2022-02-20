import { PostItem } from '../../../models/post-item/postItem.class';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public postList: PostItem[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.subscribeToPostList();
  }

  private subscribeToPostList(): void {
    this.postService.getPosts().subscribe((postItemList) => {
      this.postList = postItemList;
    });
  }
}
