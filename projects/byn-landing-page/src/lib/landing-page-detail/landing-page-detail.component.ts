import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageContentDetailModel, PageContentTemplateModel } from '../models/PageContentTemplateModel';
import { enumLayoutPageTemplate, enumLayoutPageTemplateModel } from '../constants/enum';
import { PageDetail } from '../models/PageDetail';

@Component({
  selector: 'lib-landing-page-detail',
  templateUrl: './landing-page-detail.component.html',
  styleUrls: ['./landing-page-detail.component.scss']
})
export class LandingPageDetailComponent implements OnChanges {
  @Input() dataInfo = {} as PageDetail;
  @Input() isLoading = true;
  dataTemplateJson: PageContentTemplateModel[] | any;
  enumLayoutPageTemplate: enumLayoutPageTemplateModel = enumLayoutPageTemplate;

  ngOnChanges(changes: SimpleChanges): void {
      this.dataTemplateJson = !!this.dataInfo?.DataTemplateJson ? this.dataInfo?.DataTemplateJson?.filter((m:any)=>!!m.IsActive) : [];
  }
}
