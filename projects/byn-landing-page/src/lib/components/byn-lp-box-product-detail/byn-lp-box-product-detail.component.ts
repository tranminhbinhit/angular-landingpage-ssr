import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
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
    return this.dataInfo?.ListContent.map((m: any) => m.Image) || [];
  }

  starClassProduct(value: string, step: number) {
    var start = parseFloat(value);
    if (start >= step) {
      return "full";
    } else if (start + 0.5 >= step) {
      return "half";
    } else {
      return '';
    }
  }
}
