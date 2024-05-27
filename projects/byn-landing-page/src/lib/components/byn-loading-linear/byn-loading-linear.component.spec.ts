import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLoadingLinearComponent } from './byn-loading-linear.component';

describe('BynLoadingLinearComponent', () => {
  let component: BynLoadingLinearComponent;
  let fixture: ComponentFixture<BynLoadingLinearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynLoadingLinearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynLoadingLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
