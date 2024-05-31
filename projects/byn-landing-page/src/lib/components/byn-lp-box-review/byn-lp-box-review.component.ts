import { Component, ElementRef, Input, Renderer2 } from "@angular/core";
import { PageContentTemplateModel } from "../../models/PageContentTemplateModel";
import { PlatformService } from "byn-core";

@Component({
  selector: "lib-byn-lp-box-review",
  templateUrl: "./byn-lp-box-review.component.html",
  styleUrls: ["./byn-lp-box-review.component.scss"],
})
export class BynLpBoxReviewComponent {
  @Input() dataInfo: PageContentTemplateModel | any;
  boxesToShow: number = 1;
  currentIndex = 0;
  transform = "translateX(0)";
  autoSlideInterval: any;
  isClient: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private platformService: PlatformService
  ) {
    this.isClient = this.platformService.isBrowser();
  }
  ngOnInit(): void {
    //TODO TEST
    this.updateBoxesToShow();
    if (this.isClient) {
      this.startAutoSlide();
    }
  }

  get listContent() {
    return this.dataInfo.ListContent || [];
  }

  ngOnChanges(): void {
    this.updateBoxesToShow();
  }

  updateBoxesToShow() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "--boxes-to-show",
      this.boxesToShow
    );
    this.updateTransform();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.boxesToShow;
      if (this.currentIndex < 0) this.currentIndex = 0;
      this.updateTransform();
    }
  }

  next() {
    if (this.currentIndex < this.listContent.length - this.boxesToShow) {
      this.currentIndex += this.boxesToShow;
      if (this.currentIndex > this.listContent.length - this.boxesToShow) {
        // Nếu đến item cuối cùng, chuyển về item đầu tiên mà không có cảm giác giật
        this.currentIndex = 0;
      }
      this.updateTransform();
    } else {
      // Nếu đang ở item cuối cùng và muốn chuyển đến item đầu tiên
      this.currentIndex = 0;
      this.updateTransform();
    }
  }

  updateTransform() {
    this.transform = `translateX(-${
      this.currentIndex * (100 / this.boxesToShow)
    }%)`;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
}
