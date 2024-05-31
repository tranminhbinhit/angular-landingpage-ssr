import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxImageGirdComponent } from './byn-lp-box-image-gird.component';

describe('BynLpBoxImageGirdComponent', () => {
  let component: BynLpBoxImageGirdComponent;
  let fixture: ComponentFixture<BynLpBoxImageGirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynLpBoxImageGirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynLpBoxImageGirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
