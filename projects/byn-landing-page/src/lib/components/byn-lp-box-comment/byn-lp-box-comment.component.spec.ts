import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynLpBoxCommentComponent } from './byn-lp-box-comment.component';

describe('BynLpBoxCommentComponent', () => {
  let component: BynLpBoxCommentComponent;
  let fixture: ComponentFixture<BynLpBoxCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynLpBoxCommentComponent]
    });
    fixture = TestBed.createComponent(BynLpBoxCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
