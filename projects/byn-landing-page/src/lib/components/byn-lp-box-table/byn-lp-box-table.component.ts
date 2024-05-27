import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-table',
  templateUrl: './byn-lp-box-table.component.html',
  styleUrls: ['./byn-lp-box-table.component.scss']
})
export class BynLpBoxTableComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
}
