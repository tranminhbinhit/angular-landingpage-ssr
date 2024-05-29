import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxHeaderComponent } from './byn-lp-box-header.component';

describe('BynLpBoxHeaderComponent', () => {
  let component: BynLpBoxHeaderComponent;
  let fixture: ComponentFixture<BynLpBoxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynLpBoxHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynLpBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
