import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynPopupComponent } from './byn-popup.component';

describe('BynPopupComponent', () => {
  let component: BynPopupComponent;
  let fixture: ComponentFixture<BynPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
