import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerExample } from './youtube-player-example/youtube-player-example.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerExample,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
