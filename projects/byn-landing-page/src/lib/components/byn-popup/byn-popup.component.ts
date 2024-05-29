import { Component, Input } from "@angular/core";

@Component({
  selector: "app-byn-popup",
  templateUrl: "./byn-popup.component.html",
  styleUrl: "./byn-popup.component.scss",
})
export class BynPopupComponent {
  @Input() title: string = "";
  @Input() isAutoClose: boolean = true;
  @Input() isButtonClose: boolean = true;
  @Input() classModal: string = "modal-dialog-centered";//modal-xl modal-dialog-centered 
  isVisible: boolean = false;

  openPopup(): void {
    this.isVisible = true;
    setTimeout(() => {
      document.querySelector(".modal-overlay")?.classList.add("show");
    }, 0);
  }

  closePopup(): void {
    document.querySelector(".modal-overlay")?.classList.remove("show");
    setTimeout(() => {
      this.isVisible = false;
    }, 300); // Thời gian trùng với thời gian của transition
  }
}
