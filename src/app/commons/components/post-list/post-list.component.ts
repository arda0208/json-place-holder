import { PostStoreService } from './../../../services/post/post-store.service';
import { PostItem } from '../../../models/post-item/postItem.class';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  constructor(public postStoreService: PostStoreService) {}
}
