import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BynLpBoxCountdownComponent } from './components/byn-lp-box-countdown/byn-lp-box-countdown.component';
import { BynLpBoxActiveCustomerComponent } from './components/byn-lp-box-active-customer/byn-lp-box-active-customer.component';
import { BynLpBoxCommentComponent } from './components/byn-lp-box-comment/byn-lp-box-comment.component';
import { BynLpBoxFormComponent } from './components/byn-lp-box-form/byn-lp-box-form.component';
import { BynLpBoxNewsComponent } from './components/byn-lp-box-news/byn-lp-box-news.component';
import { BynLpBoxProductDetailComponent } from './components/byn-lp-box-product-detail/byn-lp-box-product-detail.component';
import { BynLpBoxProductComponent } from './components/byn-lp-box-product/byn-lp-box-product.component';
import { BynLpBoxReviewComponent } from './components/byn-lp-box-review/byn-lp-box-review.component';
import { BynLpBoxStepComponent } from './components/byn-lp-box-step/byn-lp-box-step.component';
import { BynLpBoxTimelineComponent } from './components/byn-lp-box-timeline/byn-lp-box-timeline.component';
import { BynLpBoxNewsLeftRightComponent } from './components/byn-lp-box-news-left-right/byn-lp-box-news-left-right.component';
import { PipeModule } from './pipes/pipe.module';
import { BynLpBoxTableComponent } from './components/byn-lp-box-table/byn-lp-box-table.component';
import { LandingPageDetailComponent } from './landing-page-detail/landing-page-detail.component';
import { BynLoadingLinearComponent } from './components/byn-loading-linear/byn-loading-linear.component';



@NgModule({
  declarations: [
    BynLpBoxCountdownComponent,
    BynLpBoxActiveCustomerComponent,
    BynLpBoxCommentComponent,
    BynLpBoxFormComponent,
    BynLpBoxNewsComponent,
    BynLpBoxProductDetailComponent,
    BynLpBoxProductComponent,
    BynLpBoxReviewComponent,
    BynLpBoxStepComponent,
    BynLpBoxTimelineComponent,
    BynLpBoxNewsLeftRightComponent,
    BynLpBoxTableComponent,
    LandingPageDetailComponent,
    BynLoadingLinearComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
  ],
  exports: [
    BynLpBoxCountdownComponent,
    BynLpBoxActiveCustomerComponent,
    BynLpBoxCommentComponent,
    BynLpBoxFormComponent,
    BynLpBoxNewsComponent,
    BynLpBoxProductDetailComponent,
    BynLpBoxProductComponent,
    BynLpBoxReviewComponent,
    BynLpBoxStepComponent,
    BynLpBoxTimelineComponent,
    BynLpBoxNewsLeftRightComponent,
    BynLpBoxTableComponent,
    LandingPageDetailComponent,
    BynLoadingLinearComponent
  ]
})
export class BynLandingPageModule { }
