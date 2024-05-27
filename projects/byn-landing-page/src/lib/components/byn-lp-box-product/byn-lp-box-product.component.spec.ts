import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxProductComponent } from './byn-lp-box-product.component';

describe('BynLpBoxProductComponent', () => {
  let component: BynLpBoxProductComponent;
  let fixture: ComponentFixture<BynLpBoxProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxProductComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
