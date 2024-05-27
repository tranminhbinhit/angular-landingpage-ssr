import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxReviewComponent } from './byn-lp-box-review.component';

describe('BynLpBoxReviewComponent', () => {
  let component: BynLpBoxReviewComponent;
  let fixture: ComponentFixture<BynLpBoxReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxReviewComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
