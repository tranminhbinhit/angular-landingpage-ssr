import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageDetailComponent } from './landing-page-detail.component';

describe('LandingPageDetailComponent', () => {
  let component: LandingPageDetailComponent;
  let fixture: ComponentFixture<LandingPageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageDetailComponent]
    });
    fixture = TestBed.createComponent(LandingPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
