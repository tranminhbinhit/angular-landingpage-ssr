import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAnalyticsGTagComponentComponent } from './google-analytics-gtag-component.component';

describe('GoogleAnalyticsGTagComponentComponent', () => {
  let component: GoogleAnalyticsGTagComponentComponent;
  let fixture: ComponentFixture<GoogleAnalyticsGTagComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAnalyticsGTagComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleAnalyticsGTagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
