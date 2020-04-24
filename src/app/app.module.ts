import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerExample } from './youtube-player-example/youtube-player-example.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
