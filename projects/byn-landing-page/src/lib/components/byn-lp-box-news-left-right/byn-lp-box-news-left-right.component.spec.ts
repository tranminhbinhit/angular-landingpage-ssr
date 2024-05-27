import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxNewsLeftRightComponent } from './byn-lp-box-news-left-right.component';

describe('BynLpBoxNewsLeftRightComponent', () => {
  let component: BynLpBoxNewsLeftRightComponent;
  let fixture: ComponentFixture<BynLpBoxNewsLeftRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxNewsLeftRightComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxNewsLeftRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
