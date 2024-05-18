import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BynLandingPageModule, PageContentTemplateModel, PageDetail, enumLayoutPageTemplate, enumLayoutPageTemplateModel } from 'byn-landing-page';
import { PageService } from '../../services/page.service';
import { CommonModule, DOCUMENT, isPlatformServer } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { getImageCdn } from '../../utils/utils';
import { FaviconService } from '../../services/favicon.service';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, BynLandingPageModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true
})
export class HomePageComponent implements OnInit {

  nameRewrite: any = '';
  dataInfo: PageDetail = {} as PageDetail;
  dataTemplateJson: PageContentTemplateModel[] = [];
  enumLayoutPageTemplate: enumLayoutPageTemplateModel = enumLayoutPageTemplate;
  hostName = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    // private platformLocation: PlatformLocation,
    @Inject(PLATFORM_ID) private platformId: Object,
    private pageService: PageService,
    private commonService: CommonService,
    private faviconService: FaviconService
  ) {
  }
  ngOnInit(): void {
    this.innitData();
  }

  innitData() {
    let nameRewrite = this.document.location.hostname;
    this.pageService.getPageDetail({
      NameRewrite: nameRewrite
    }).subscribe(res => {
      this.dataInfo = res?.Data || {};
      this.initSeo();
    })
  }

  initSeo() {
    const {ValueDataJson} = this.dataInfo;
    this.commonService.initSeoPage({
      title: ValueDataJson?.WebTitle,
      description: ValueDataJson?.WebDescription,
      keyword: ValueDataJson?.WebKeyword,
      image: !!ValueDataJson?.WebImage ? getImageCdn(ValueDataJson?.WebImage) : ''
    });
    if(ValueDataJson?.WebFavorite){
      this.faviconService.setFavicon(getImageCdn(ValueDataJson?.WebFavorite));
    }
  }
}
