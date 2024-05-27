import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-product',
  templateUrl: './byn-lp-box-product.component.html',
  styleUrls: ['./byn-lp-box-product.component.scss']
})
export class BynLpBoxProductComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
}
