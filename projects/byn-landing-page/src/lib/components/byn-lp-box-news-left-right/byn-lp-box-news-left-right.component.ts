import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-news-left-right',
  templateUrl: './byn-lp-box-news-left-right.component.html',
  styleUrls: ['./byn-lp-box-news-left-right.component.scss']
})
export class BynLpBoxNewsLeftRightComponent {
  @Input() dataInfo: PageContentTemplateModel|any = {} as PageContentTemplateModel;
}
