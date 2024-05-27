import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxActiveCustomerComponent } from './byn-lp-box-active-customer.component';

describe('BynLpBoxActiveCustomerComponent', () => {
  let component: BynLpBoxActiveCustomerComponent;
  let fixture: ComponentFixture<BynLpBoxActiveCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxActiveCustomerComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxActiveCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
