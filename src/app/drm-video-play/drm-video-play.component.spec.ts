import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrmVideoPlayComponent } from './drm-video-play.component';

describe('DrmVideoPlayComponent', () => {
  let component: DrmVideoPlayComponent;
  let fixture: ComponentFixture<DrmVideoPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrmVideoPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrmVideoPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
