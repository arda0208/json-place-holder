import { PostItem } from '../../../models/post-item/postItem.class';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() public item!: PostItem;

  constructor() {}

  ngOnInit(): void {}
}
