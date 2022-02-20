import { PostService } from './services/post/post.service';
import { MainComponent } from './pages/main/main.component';
import { CommonsModules } from './commons/commons.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostStoreService } from './services/post/post-store.service';

const modules = [
  CommonsModules,
  HttpClientModule,
  CommonModule,
  BrowserModule,
  AppRoutingModule,
];

const services = [PostService, PostStoreService];
@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [...modules],
  exports: [...modules],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
