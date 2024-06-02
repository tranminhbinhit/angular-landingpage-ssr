import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {
  CdnUrlPipe,
  CurrencyBynPipe,
  DatetimePipe,
  IsUrlBynPipe,
  PercentBynPipe,
  PhonePipe,
} from "./common.pipe";

@NgModule({
  declarations: [
    CdnUrlPipe,
    DatetimePipe,
    PhonePipe,
    PercentBynPipe,
    CurrencyBynPipe,
    IsUrlBynPipe
  ],
  imports: [CommonModule],
  exports: [
    CdnUrlPipe,
    DatetimePipe,
    PhonePipe,
    PercentBynPipe,
    CurrencyBynPipe,
    IsUrlBynPipe
  ],
})
export class PipeModule { }
