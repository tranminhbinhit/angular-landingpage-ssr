import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynImageListViewComponent } from './byn-image-list-view.component';

describe('BynImageListViewComponent', () => {
  let component: BynImageListViewComponent;
  let fixture: ComponentFixture<BynImageListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BynImageListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BynImageListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
