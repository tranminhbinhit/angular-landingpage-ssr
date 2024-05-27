import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynTestComponent } from './byn-test.component';

describe('BynTestComponent', () => {
  let component: BynTestComponent;
  let fixture: ComponentFixture<BynTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
