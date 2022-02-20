import { NavBarComponent } from './components/nav-bar';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const components = [NavBarComponent];

@NgModule({
  declarations: [...components], //...pipes, ...directives
  providers: [],
  imports: [FormsModule, CommonModule],
  exports: [...components],
  schemas: [],
})
export class CommonsModules {}
