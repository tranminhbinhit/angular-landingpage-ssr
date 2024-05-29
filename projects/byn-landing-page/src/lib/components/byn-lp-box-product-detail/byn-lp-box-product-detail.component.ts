import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { PageContentTemplateModel } from "../../models/PageContentTemplateModel";
import { isEmpty } from "byn-core";

@Component({
  selector: "lib-byn-lp-box-product-detail",
  templateUrl: "./byn-lp-box-product-detail.component.html",
  styleUrls: ["./byn-lp-box-product-detail.component.scss"],
})
export class BynLpBoxProductDetailComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
  get productImages() {
    return this.dataInfo?.ListContent.map((m:any)=>m.Image) || [];
  }
}
