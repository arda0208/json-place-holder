import { PostItem } from '../../../models/post-item/postItem.class';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() public post!: PostItem;
  public showUserId: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleShowUserId(): void {
    this.showUserId = !this.showUserId;
  }
}
