import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-byn-loading-linear',
  templateUrl: './byn-loading-linear.component.html',
  styleUrl: './byn-loading-linear.component.css'
})
export class BynLoadingLinearComponent {
  @Input() colArray = [4,4,4]; // 1-12
}
