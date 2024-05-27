import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxProductDetailComponent } from './byn-lp-box-product-detail.component';

describe('BynLpBoxProductDetailComponent', () => {
  let component: BynLpBoxProductDetailComponent;
  let fixture: ComponentFixture<BynLpBoxProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxProductDetailComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
