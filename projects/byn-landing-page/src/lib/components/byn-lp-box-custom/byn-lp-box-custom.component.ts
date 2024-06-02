import { Component, Input } from "@angular/core";
import {
  PageContentDetailModel,
  PageContentTemplateModel,
} from "../../models/PageContentTemplateModel";

@Component({
  selector: "lib-byn-lp-box-custom",
  templateUrl: "./byn-lp-box-custom.component.html",
  styleUrls: ["./byn-lp-box-custom.component.css"],
})
export class BynLpBoxCustomComponent {
  @Input() dataInfo: PageContentTemplateModel | any;

  styleRow(item: PageContentDetailModel): string {
    return `margin-top: ${item.Content1}px; margin-bottom: ${item.Content2}px; width: ${item.Description}%`;
  }
}
