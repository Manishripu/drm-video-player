import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'shaka-player';
declare const shaka: any;

@Component({
  selector: 'app-drm-video-play',
  standalone: true,
  imports: [],
  templateUrl: './drm-video-play.component.html',
  styleUrl: './drm-video-play.component.css',
})
export class DrmVideoPlayComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: false })
  videoElement!: ElementRef<HTMLVideoElement>;
  player!: shaka.Player;

  ngAfterViewInit() {
    this.initShakaPlayer();
  }

  initShakaPlayer() {
    const video = this.videoElement.nativeElement;
    this.player = new shaka.Player(video);

    this.player.configure({
      drm: {
        servers: {
          'com.widevine.alpha': 'https://your-widevine-license-server.com',
          'com.apple.fps.1_0': 'https://your-fairplay-license-server.com',
        },
      },
    });

    this.player
      .load('https://your-hls-stream-url.m3u8')
      .then(() => {
        console.log('Video loaded successfully with DRM');
      })
      .catch((error: any) => console.error('Error loading video:', error));
  }
}
