import { Component, Input } from "@angular/core";
import { PageContentTemplateModel } from "../../models/PageContentTemplateModel";
import { PlatformService } from "byn-core";

@Component({
  selector: "lib-byn-lp-box-review",
  templateUrl: "./byn-lp-box-review.component.html",
  styleUrls: ["./byn-lp-box-review.component.css"],
})
export class BynLpBoxReviewComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
  isClient = false;
  constructor(private platformService: PlatformService) {
    this.isClient = this.platformService.isBrowser();
  }
  sizeView() {
    switch (this.dataInfo.Content1) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 3;
      default:
        return 12;
    }
  }
}
