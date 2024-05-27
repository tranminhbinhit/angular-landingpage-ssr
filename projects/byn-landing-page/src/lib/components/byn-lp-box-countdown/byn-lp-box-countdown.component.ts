import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';
import { LocalStorageService } from '../../services/local-storage.service';
import { isEmpty, isEmptyObject } from '../../utils/utils';

@Component({
  selector: 'lib-byn-lp-box-countdown',
  templateUrl: './byn-lp-box-countdown.component.html',
  styleUrls: ['./byn-lp-box-countdown.component.scss']
})
export class BynLpBoxCountdownComponent {
  @Input() dataInfo: PageContentTemplateModel|any;
  currentDate: Date = new Date();
  targetDate: Date = new Date(2023,8,18);
  intervalTime: any;
  keySaveCountdown = "countdownEvent";

  constructor(private localStorageService: LocalStorageService){

  }

  @ViewChild('vcDays',{static: true}) vcDays: ElementRef|any;
  @ViewChild('vcHours',{static: true}) vcHours: ElementRef|any;
  @ViewChild('vcMinutes',{static: true}) vcMinutes: ElementRef|any;
  @ViewChild('vcSeconds',{static: true}) vcSeconds: ElementRef|any;

  ngOnInit(): void {
    //this.targetDate = new Date(this.currentDate.getTime() + (1000 * 60 * 60* 24 * 2));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initTimeCountdown();
  }

  initTimeCountdown() {
    if(!isEmptyObject(this.dataInfo)){
      const dayEndStore = this.localStorageService.get(this.keySaveCountdown);
      const dayEnd:any = !isEmpty(dayEndStore) ? new Date(dayEndStore) : null;
      // console.log(dayEnd < new Date(), dayEnd, new Date());
      if(dayEnd == null || dayEnd == 'Invalid Date' || dayEnd < new Date()){
        const {Content1, Content2, Content3, Content4} = this.dataInfo;
        let nextTime = 0;
        if(!!Content1) {
          nextTime += (1000 * 60 * 60 * 24 * Content1);
        }
        if(!!Content2) {
          nextTime += (1000 * 60 * 60 * Content2);
        }
        if(!!Content3) {
          nextTime += (1000 * 60 * Content3);
        }
        if(!!Content4) {
          nextTime += (1000 * Content4);
        }
        
        this.targetDate = new Date(this.currentDate.getTime() + nextTime);
        // console.log(this.targetDate.toLocaleString(), 'this.targetDate');
        this.localStorageService.set(this.keySaveCountdown ,this.targetDate.toLocaleString());
      } else {
        this.targetDate = dayEnd;
      }
      this.tickTock();
    }
    
  }

  ngAfterViewInit(): void {
    //this.tickTock();
  }

  tickTock() {
    this.clearTickTock();
    this.intervalTime = setInterval(() => {
      const timeleft = this.targetDate.getTime() - new Date().getTime();
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      if(timeleft > 0) {
        days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      } else {
        this.clearTickTock();
        this.initTimeCountdown();
      }
  
      this.vcDays.nativeElement.innerText = days;
      this.vcHours.nativeElement.innerText = hours;
      this.vcMinutes.nativeElement.innerText = minutes;
      this.vcSeconds.nativeElement.innerText = seconds;
    }, 1000);
  }

  clearTickTock() {
    if(this.intervalTime != null) {
      clearInterval(this.intervalTime);
    }
  }

  ngOnDestroy(): void {
    this.clearTickTock();
  }
}
