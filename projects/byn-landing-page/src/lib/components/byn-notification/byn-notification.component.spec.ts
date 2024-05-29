import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynNotificationComponent } from './byn-notification.component';

describe('BynNotificationComponent', () => {
  let component: BynNotificationComponent;
  let fixture: ComponentFixture<BynNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
