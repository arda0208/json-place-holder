import { PostItem } from '../../../models/post-item/postItem.class';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() public post!: PostItem;
  @Input() public index: number;
  public showUserId: boolean = false;
  public randomColor: string = '';

  constructor() {}

  ngOnInit(): void {
    this.generateRandomColor();
  }

  public toggleShowUserId(): void {
    this.showUserId = !this.showUserId;
  }

  private generateRandomColor(): void {
    var red = Math.floor(255 - (255 * this.index) / 100);
    var blue = Math.floor((255 * this.index) / 100);
    this.randomColor = 'rgb(' + red + ',0,' + blue + ')';
  }
}
