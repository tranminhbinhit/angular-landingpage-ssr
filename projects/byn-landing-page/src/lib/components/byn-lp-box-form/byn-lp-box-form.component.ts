import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-form',
  templateUrl: './byn-lp-box-form.component.html',
  styleUrls: ['./byn-lp-box-form.component.css']
})
export class BynLpBoxFormComponent {
  @Input() dataInfo: PageContentTemplateModel|any;
}
