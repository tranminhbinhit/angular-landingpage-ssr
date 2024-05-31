import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { BynPopupComponent } from "../byn-popup/byn-popup.component";
import { isEmpty } from "byn-core";

@Component({
  selector: "app-byn-popup-image-viewer",
  templateUrl: "./byn-popup-image-viewer.component.html",
  styleUrls: ["./byn-popup-image-viewer.component.scss"],
})
export class BynPopupImageViewerComponent implements OnChanges {
  @Input() imageView: string = "";
  @Input() listImage: any = [];
  @Output() handleChangeImageView = new EventEmitter();
  @ViewChild("popup") popup!: BynPopupComponent;
  isView = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.popup ? this.popup.getVisible() : '', this.imageView, 'test')
    if (!isEmpty(this.imageView) && !this.popup.isVisible) {
      this.popup.openPopup();
    }
  }

  onHandleVisible(isVisible: boolean){
    if(!isVisible){
      this.handleChangeImageView.emit('');
    }
  }
}
