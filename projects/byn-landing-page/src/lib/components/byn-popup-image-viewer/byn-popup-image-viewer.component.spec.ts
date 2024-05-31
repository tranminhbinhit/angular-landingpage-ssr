import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynPopupImageViewerComponent } from './byn-popup-image-viewer.component';

describe('BynPopupImageViewerComponent', () => {
  let component: BynPopupImageViewerComponent;
  let fixture: ComponentFixture<BynPopupImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynPopupImageViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynPopupImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
