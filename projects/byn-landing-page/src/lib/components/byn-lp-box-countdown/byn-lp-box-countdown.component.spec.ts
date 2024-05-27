import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxCountdownComponent } from './byn-lp-box-countdown.component';

describe('BynLpBoxCountdownComponent', () => {
  let component: BynLpBoxCountdownComponent;
  let fixture: ComponentFixture<BynLpBoxCountdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxCountdownComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
