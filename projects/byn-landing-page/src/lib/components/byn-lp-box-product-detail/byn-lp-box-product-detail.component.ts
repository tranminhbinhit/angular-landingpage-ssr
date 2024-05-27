import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-product-detail',
  templateUrl: './byn-lp-box-product-detail.component.html',
  styleUrls: ['./byn-lp-box-product-detail.component.css']
})
export class BynLpBoxProductDetailComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
}
