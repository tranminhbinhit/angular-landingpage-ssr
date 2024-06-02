import { Component, Input, OnInit } from "@angular/core";
import { PageContentTemplateModel } from "../../models/PageContentTemplateModel";

@Component({
  selector: "lib-byn-lp-box-image-gird",
  templateUrl: "./byn-lp-box-image-gird.component.html",
  styleUrls: ["./byn-lp-box-image-gird.component.scss"],
})
export class BynLpBoxImageGirdComponent implements OnInit {
  @Input() dataInfo: PageContentTemplateModel | any;
  imageView: string = '';
  ngOnInit(): void {
    //TODO TEST
    // this.dataInfo.ListContent = [
    //   {
    //     Image: 'https://webocb-api.ocb.com.vn/Resources/Images/20240529135109_ttsk-uniqlo-tuan-le-cam-on.jpg'
    //   },
    //   {
    //     Image: 'https://webocb-api.ocb.com.vn/Resources/Images/20221207163918_thumbnail-spdv-website-moi-ko-logo-ko-text.jpg'
    //   },
    //   {
    //     Image: 'https://webocb-api.ocb.com.vn/Resources/Images/20240425144112_ttsk-khai-the-quyen-luc.jpg'
    //   },
    //   {
    //     Image: 'https://webocb-api.ocb.com.vn/Resources/Images/20240419143732_vay-mua-nha-xinthumbnail-tin-tuc-uu-dai.jpg'
    //   },
    //   {
    //     Image: 'https://webocb-api.ocb.com.vn/Resources/Images/20240503140327_banner-540x360.jpg'
    //   },
    // ]
  }

  onViewPopup(image: string){
    this.imageView = image;
  }

  get listImageView(){
    return this.dataInfo.ListContent.map((m:any) => m.Image) || [];
  }

}
