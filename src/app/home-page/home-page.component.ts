import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BynLandingPageModule, PageContentTemplateModel, PageDetail, enumLayoutPageTemplate, enumLayoutPageTemplateModel } from 'byn-landing-page';
import { PageService } from '../../services/page.service';
import { CommonModule, isPlatformServer } from '@angular/common';

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

  constructor(
    private injector: Injector,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService) {
  }
  ngOnInit(): void {
    this.innitData();
  }

  innitData() {

    let nameRewrite = 'localhost';
    // if (isPlatformServer(this.platformId)) {
    //   nameRewrite =  this.injector.get('hostname');
    // } else {
    //   nameRewrite = document.location.hostname;
    // }
    
    this.pageService.getPageDetail({
      NameRewrite: nameRewrite
    }).subscribe(res => {
      this.dataInfo = res?.Data || {};
      this.initSeo();
    })
  }

  initSeo() {
    const {ValueDataJson} = this.dataInfo;
  }
}
