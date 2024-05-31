import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxBannerComponent } from './byn-lp-box-banner.component';

describe('BynLpBoxBannerComponent', () => {
  let component: BynLpBoxBannerComponent;
  let fixture: ComponentFixture<BynLpBoxBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynLpBoxBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynLpBoxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
