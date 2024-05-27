import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-timeline',
  templateUrl: './byn-lp-box-timeline.component.html',
  styleUrls: ['./byn-lp-box-timeline.component.css']
})
export class BynLpBoxTimelineComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
}
