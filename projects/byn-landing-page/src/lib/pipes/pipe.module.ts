import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {
  CdnUrlPipe,
  DatetimePipe,
  PercentBynPipe,
  PhonePipe,
} from "./common.pipe";

@NgModule({
  declarations: [
    CdnUrlPipe,
    DatetimePipe,
    PhonePipe,
    PercentBynPipe,
  ],
  imports: [CommonModule],
  exports: [
    CdnUrlPipe,
    DatetimePipe,
    PhonePipe,
    PercentBynPipe,
  ],
})
export class PipeModule { }
