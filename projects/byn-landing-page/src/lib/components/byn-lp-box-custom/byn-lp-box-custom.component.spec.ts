import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxCustomComponent } from './byn-lp-box-custom.component';

describe('BynLpBoxCustomComponent', () => {
  let component: BynLpBoxCustomComponent;
  let fixture: ComponentFixture<BynLpBoxCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxCustomComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
