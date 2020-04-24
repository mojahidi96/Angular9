import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player-example',
  templateUrl: './youtube-player-example.component.html',
})
export class YoutubePlayerExample implements OnInit {
  ngOnInit() {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
