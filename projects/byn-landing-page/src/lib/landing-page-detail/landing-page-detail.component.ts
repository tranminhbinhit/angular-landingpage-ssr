import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { PageContentDetailModel, PageContentTemplateModel } from '../models/PageContentTemplateModel';
import { enumLayoutPageTemplate, enumLayoutPageTemplateModel } from '../constants/enum';
import { PageDetail } from '../models/PageDetail';
import { BynPopupComponent } from '../components/byn-popup/byn-popup.component';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'lib-landing-page-detail',
  templateUrl: './landing-page-detail.component.html',
  styleUrls: ['./landing-page-detail.component.scss']
})
export class LandingPageDetailComponent implements OnChanges {
  @Input() dataInfo = {} as PageDetail;
  @Input() isShowHeader: boolean = false;
  @Input() isLoading = true;
  dataTemplateJson: PageContentTemplateModel[] | any;
  enumLayoutPageTemplate: enumLayoutPageTemplateModel = enumLayoutPageTemplate;

  //
  @ViewChild('popup') popup!: BynPopupComponent;

  constructor(private notificationService: NotificationService) {}

  // triggerNotification() {
  //   this.notificationService.showNotification('This is a notification message!');
  // }

  ngOnChanges(changes: SimpleChanges): void {
      this.dataTemplateJson = !!this.dataInfo?.DataTemplateJson ? this.dataInfo?.DataTemplateJson?.filter((m:any)=>!!m.IsActive) : [];
  }

  get layoutPageHeader() {
    return this.dataTemplateJson.find((m:any)=>m.TemplateCode ==
      enumLayoutPageTemplate.LayoutPageHeaderNav.key) || null;
  }
}
