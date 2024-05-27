import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxFormComponent } from './byn-lp-box-form.component';

describe('BynLpBoxFormComponent', () => {
  let component: BynLpBoxFormComponent;
  let fixture: ComponentFixture<BynLpBoxFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxFormComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
