import { ItemComponent } from './components/item/item.component';
import { NavBarComponent } from './components/nav-bar';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list';

const components = [NavBarComponent, ItemListComponent, ItemComponent];

@NgModule({
  declarations: [...components], //...pipes, ...directives
  providers: [],
  imports: [FormsModule, CommonModule],
  exports: [...components],
  schemas: [],
})
export class CommonsModules {}
