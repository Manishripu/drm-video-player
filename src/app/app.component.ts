import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrmVideoPlayComponent } from './drm-video-play/drm-video-play.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrmVideoPlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'drm-video-player';
}
