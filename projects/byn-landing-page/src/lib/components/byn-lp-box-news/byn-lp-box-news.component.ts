import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-news',
  templateUrl: './byn-lp-box-news.component.html',
  styleUrls: ['./byn-lp-box-news.component.css']
})
export class BynLpBoxNewsComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
}
