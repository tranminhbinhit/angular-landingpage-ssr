import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxOrderDetailComponent } from './byn-lp-box-order-detail.component';

describe('BynLpBoxOrderDetailComponent', () => {
  let component: BynLpBoxOrderDetailComponent;
  let fixture: ComponentFixture<BynLpBoxOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynLpBoxOrderDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynLpBoxOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
