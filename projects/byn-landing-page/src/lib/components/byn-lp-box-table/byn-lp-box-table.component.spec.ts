import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxTableComponent } from './byn-lp-box-table.component';

describe('BynLpBoxTableComponent', () => {
  let component: BynLpBoxTableComponent;
  let fixture: ComponentFixture<BynLpBoxTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxTableComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
