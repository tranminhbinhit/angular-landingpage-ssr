import { Component, Input, SimpleChanges } from "@angular/core";
import { PlatformService, isEmpty, isEmptyObject } from "byn-core";

@Component({
  selector: "app-byn-image-list-view",
  templateUrl: "./byn-image-list-view.component.html",
  styleUrl: "./byn-image-list-view.component.css",
})
export class BynImageListViewComponent {
  @Input() productImages: string[] = [];
  selectedImage: string = "";
  autoSlideInterval: any;
  isClient:boolean = false;

  constructor(private platformService: PlatformService) {
    this.isClient = this.platformService.isBrowser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!isEmptyObject(this.productImages) && isEmpty(this.selectedImage)) {
      this.selectedImage = this.productImages[0] || "";
    }
  }

  ngOnInit(): void {
    if(this.isClient){
      this.startAutoSlide();
    }
  }

  hoverImage(image: string): void {
    this.selectImage(image);
  }

  selectImage(image: string): void {
    this.selectedImage = image;
    this.startAutoSlide();
  }

  prevImage(): void {
    const currentIndex = this.productImages.indexOf(this.selectedImage);
    const prevIndex =
      (currentIndex - 1 + this.productImages.length) %
      this.productImages.length;
    this.selectImage(this.productImages[prevIndex]);
  }

  nextImage(): void {
    const currentIndex = this.productImages.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.productImages.length;
    this.selectImage(this.productImages[nextIndex]);
  }

  startAutoSlide(): void {
    this.clearAutoSlideInterval();
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 3000); // Change the image every 3 seconds
  }

  clearAutoSlideInterval() {
    if(this.autoSlideInterval){
      clearInterval(this.autoSlideInterval);
    }
  }

  ngOnDestroy(): void {
    this.clearAutoSlideInterval();
  }
}
