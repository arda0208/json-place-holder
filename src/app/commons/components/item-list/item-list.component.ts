import { PostItem } from './../../../models/post-item/postItem.class';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/movie';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  public itemList: PostItem[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.subscribeToPostList();
  }

  private subscribeToPostList(): void {
    this.postService.getPosts().subscribe((postItemList) => {
      this.itemList = postItemList;
    });
  }
}
