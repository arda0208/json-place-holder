import { PostComponent } from './components/item/post.component';
import { NavBarComponent } from './components/nav-bar';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list';

const components = [NavBarComponent, PostListComponent, PostComponent];

@NgModule({
  declarations: [...components], //...pipes, ...directives
  providers: [],
  imports: [FormsModule, CommonModule],
  exports: [...components],
  schemas: [],
})
export class CommonsModules {}
