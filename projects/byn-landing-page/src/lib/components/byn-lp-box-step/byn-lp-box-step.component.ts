import { Component, Input } from '@angular/core';
import { PageContentTemplateModel } from '../../models/PageContentTemplateModel';

@Component({
  selector: 'lib-byn-lp-box-step',
  templateUrl: './byn-lp-box-step.component.html',
  styleUrls: ['./byn-lp-box-step.component.css']
})
export class BynLpBoxStepComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
  sizeView() {
    switch(this.dataInfo.Content1){
      case 1:
        return 12;
      case 2: 
        return 6;
      case 3: 
        return 4;
      case 4: 
        return 3;
      default:
        return 12;
    }
  }
}
