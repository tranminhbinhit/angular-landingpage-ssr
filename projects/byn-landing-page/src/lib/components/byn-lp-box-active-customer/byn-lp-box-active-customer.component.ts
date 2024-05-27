import { Component, Inject, Input, PLATFORM_ID } from "@angular/core";
import {
  PageContentDetailModel,
  PageContentTemplateModel,
} from "../../models/PageContentTemplateModel";
import { randomNumberinRange } from "../../utils/utils";
import { PlatformLocation } from "@angular/common";
import { PlatformService } from "byn-core";

@Component({
  selector: "lib-byn-lp-box-active-customer",
  templateUrl: "./byn-lp-box-active-customer.component.html",
  styleUrls: ["./byn-lp-box-active-customer.component.scss"],
})
export class BynLpBoxActiveCustomerComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
  @Input() isReview: boolean = false;
  isPush: boolean = false;
  isActive: boolean = true;
  dataViewInfo: PageContentDetailModel | any = {} as PageContentDetailModel;

  constructor(private platformLocation: PlatformService) {}

  ngAfterViewInit(): void {
    if (this.platformLocation.isBrowser()) {
      this.initPushNoti();
    }
  }

  initPushNoti = () => {
    if (!this.isPush && this.isActive) {
      this.isPush = true;
      const listData = this.dataInfo.ListContent || [];
      var time = randomNumberinRange(3000, 7000);
      setTimeout(() => {
        var notiItem = listData[Math.floor(Math.random() * listData.length)];
        this.setPushNoti(notiItem);
        setTimeout(() => {
          this.isPush = false;
          this.setPushNoti({
            ...notiItem,
            Id: 0
          });
          this.initPushNoti();
        }, 3000);
      }, time);
    }
  };

  setPushNoti(item: any) {
    this.dataViewInfo = item;
  }

  clearTickTock() {
    this.isActive = false;
  }

  ngOnDestroy(): void {
    this.clearTickTock();
  }
}
