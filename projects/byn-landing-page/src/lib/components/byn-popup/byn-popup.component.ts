import { Component, EventEmitter, Input, Output } from "@angular/core";

/*
classModal:
  Size:
    .modal-sm	  300px
    None	      500px
    .modal-lg	  800px
    .modal-xl	  1140px
    modal-fullscreen
    modal-dialog-centered 
    modal-dialog-scrollable
    https://getbootstrap.com/docs/5.0/components/modal/
*/

@Component({
  selector: "app-byn-popup",
  templateUrl: "./byn-popup.component.html",
  styleUrls: ["./byn-popup.component.scss"],
})
export class BynPopupComponent {
  @Input() title: string = "";
  @Input() isAutoClose: boolean = true;
  @Input() isButtonClose: boolean = true;
  @Input() classModal: string = "modal-dialog-centered";//modal-xl modal-lg modal-sm modal-dialog-centered modal-dialog-scrollable
  @Output() handleVisible = new EventEmitter();
  isVisible: boolean = false;

  openPopup(): void {
    this.onChangeVisible(true);
    setTimeout(() => {
      document.querySelector(".modal-overlay")?.classList.add("show");
    }, 0);
  }

  getVisible() {
    return this.isVisible;
  }

  closePopup(): void {
    document.querySelector(".modal-overlay")?.classList.remove("show");
    setTimeout(() => {
      this.onChangeVisible(false);
    }, 300); // Thời gian trùng với thời gian của transition
  }
  
  onChangeVisible(value: boolean){
    this.isVisible = value;
    this.handleVisible.emit(this.isVisible);
  }
}
