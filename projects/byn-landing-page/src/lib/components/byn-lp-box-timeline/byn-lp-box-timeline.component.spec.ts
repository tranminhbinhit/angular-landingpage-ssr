import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxTimelineComponent } from './byn-lp-box-timeline.component';

describe('BynLpBoxTimelineComponent', () => {
  let component: BynLpBoxTimelineComponent;
  let fixture: ComponentFixture<BynLpBoxTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxTimelineComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
