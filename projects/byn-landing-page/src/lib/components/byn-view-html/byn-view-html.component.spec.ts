import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynViewHtmlComponent } from './byn-view-html.component';

describe('BynViewHtmlComponent', () => {
  let component: BynViewHtmlComponent;
  let fixture: ComponentFixture<BynViewHtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynViewHtmlComponent]
    });
    fixture = TestBed.createComponent(BynViewHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
