import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxNewsComponent } from './byn-lp-box-news.component';

describe('BynLpBoxNewsComponent', () => {
  let component: BynLpBoxNewsComponent;
  let fixture: ComponentFixture<BynLpBoxNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxNewsComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
