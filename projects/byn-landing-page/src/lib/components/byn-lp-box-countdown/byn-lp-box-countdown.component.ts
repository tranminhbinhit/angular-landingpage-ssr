import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { PageContentTemplateModel } from "../../models/PageContentTemplateModel";
import { LocalStorageService } from "../../services/local-storage.service";
import { isEmpty, isEmptyObject } from "../../utils/utils";
import { PlatformService } from "byn-core";

@Component({
  selector: "lib-byn-lp-box-countdown",
  templateUrl: "./byn-lp-box-countdown.component.html",
  styleUrls: ["./byn-lp-box-countdown.component.scss"],
})
export class BynLpBoxCountdownComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
  currentDate: Date = new Date();
  targetDate: Date = new Date(2023, 8, 18);
  intervalTime: any;
  keySaveCountdown = "countdownEvent";

  constructor(private localStorageService: LocalStorageService, private platformLocation: PlatformService) {}

  @ViewChild("vcDays", { static: true }) vcDays: ElementRef | any;
  @ViewChild("vcHours", { static: true }) vcHours: ElementRef | any;
  @ViewChild("vcMinutes", { static: true }) vcMinutes: ElementRef | any;
  @ViewChild("vcSeconds", { static: true }) vcSeconds: ElementRef | any;

  vTime = {
    vcDays: 0,
    vcHours: 0,
    vcMinutes: 0,
    vcSeconds: 0
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.platformLocation.isBrowser()) {
      this.initTimeCountdown();
    }
  }

  initTimeCountdown() {
    if (!isEmptyObject(this.dataInfo)) {
      //TODO
      // this.dataInfo.Content5 = 2;
      // this.dataInfo.Content6 = "2024/06/22 12:11";
      const { Content1, Content2, Content3, Content4, Content5, Content6 } =
        this.dataInfo;
      
      console.log('dataInfo-Object', `${Content6.year}/${Content6.month}/${Content6.day}`);
      
      if (isEmpty(Content5) || Content5 == 1) {
        const dayEndStore = this.localStorageService.get(this.keySaveCountdown);
        const dayEnd: any = !isEmpty(dayEndStore)
          ? new Date(dayEndStore)
          : null;

        if (dayEnd == null || dayEnd == "Invalid Date" || dayEnd < new Date()) {
          //Trường hợp động đếm nhiều lần
          let nextTime = 0;
          if (!!Content1) {
            nextTime += 1000 * 60 * 60 * 24 * Content1;
          }
          if (!!Content2) {
            nextTime += 1000 * 60 * 60 * Content2;
          }
          if (!!Content3) {
            nextTime += 1000 * 60 * Content3;
          }
          if (!!Content4) {
            nextTime += 1000 * Content4;
          }

          this.targetDate = new Date(this.currentDate.getTime() + nextTime);
          this.localStorageService.set(
            this.keySaveCountdown,
            this.targetDate.toLocaleString()
          );
        } else {
          this.targetDate = dayEnd;
        }
      } else if (Content5 == 2 && !isEmpty(Content6)) {
        //Trường hợp thời gian cố định
        if(typeof(Content6) == 'object'){
          this.targetDate = new Date(`${Content6.year}/${Content6.month}/${Content6.day}`);  
        } else {
          this.targetDate = new Date(Content6);
        }
        console.log('this.targetDate', this.targetDate);
      }
      this.tickTock();
    }
  }

  ngAfterViewInit(): void {}

  tickTock() {
    this.clearTickTock();
    this.intervalTime = setInterval(() => {
      const timeleft = this.targetDate.getTime() - new Date().getTime();
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      if (timeleft > 0) {
        days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        hours = Math.floor(
          (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      } else {
        this.clearTickTock();
        this.initTimeCountdown();
      }

      this.vTime = {
        vcDays: days,
        vcHours: hours,
        vcMinutes: minutes,
        vcSeconds: seconds
      }

      this.vcDays.nativeElement.innerText = days;
      this.vcHours.nativeElement.innerText = hours;
      this.vcMinutes.nativeElement.innerText = minutes;
      this.vcSeconds.nativeElement.innerText = seconds;
    }, 1000);
  }

  clearTickTock() {
    if (this.intervalTime != null) {
      clearInterval(this.intervalTime);
    }
  }

  ngOnDestroy(): void {
    this.clearTickTock();
  }
}
