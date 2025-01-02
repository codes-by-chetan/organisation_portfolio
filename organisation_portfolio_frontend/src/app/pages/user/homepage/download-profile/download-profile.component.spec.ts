import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadProfileComponent } from './download-profile.component';

describe('DownloadProfileComponent', () => {
  let component: DownloadProfileComponent;
  let fixture: ComponentFixture<DownloadProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
