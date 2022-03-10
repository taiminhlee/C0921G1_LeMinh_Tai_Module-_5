import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {YoutubePlaylistComponent} from "../../thuc-hanh/angular-playlist-app/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "../../thuc-hanh/angular-playlist-app/youtube-player/youtube-player.component";
import {DictionayPageComponentComponent} from "./dictionary/dictionay-page-component/dictionay-page-component.component";
import {DictionaryDetailComponentComponent} from "./dictionary/dictionary-detail-component/dictionary-detail-component.component";

const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionayPageComponentComponent,
    children: [{
      path: ':id',
      component: DictionaryDetailComponentComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule { }
