import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelinesComponent } from './thuc-hanh/angular-timelines-app/timelines/timelines.component';
import {TimelinesRoutingModule} from "./thuc-hanh/angular-timelines-app/timelines-routing.module";
import { YoutubePlaylistComponent } from './thuc-hanh/angular-playlist-app/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './thuc-hanh/angular-playlist-app/youtube-player/youtube-player.component';
import {YoutubeRoutingModule} from "./thuc-hanh/angular-playlist-app/youtube-routing.module";
import { ProductListComponent } from './thuc-hanh/angular-product-management/product/product-list/product-list.component';
import { ProductCreateComponent } from './thuc-hanh/angular-product-management/product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./thuc-hanh/angular-product-management/product-routing.module";
import { DictionayPageComponentComponent } from './bai-tap/angular-dictionary/dictionary/dictionay-page-component/dictionay-page-component.component';
import { DictionaryDetailComponentComponent } from './bai-tap/angular-dictionary/dictionary/dictionary-detail-component/dictionary-detail-component.component';
import {DictionaryRoutingModule} from "./bai-tap/angular-dictionary/dictionary-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DictionayPageComponentComponent,
    DictionaryDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    TimelinesRoutingModule,
    YoutubeRoutingModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    DictionaryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
