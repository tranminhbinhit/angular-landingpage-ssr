import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxStepComponent } from './byn-lp-box-step.component';

describe('BynLpBoxStepComponent', () => {
  let component: BynLpBoxStepComponent;
  let fixture: ComponentFixture<BynLpBoxStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxStepComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
