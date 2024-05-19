import { isPlatformBrowser } from "@angular/common";
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-google-analytics-gtag-component",
  template: "",
  imports: [],
  standalone: true,
})
export class GoogleAnalyticsGTagComponentComponent implements OnChanges {
  @Input() trackingCode = "";

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {
    // BROWSER
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.trackingCode) {
      this.onInitGoogle();
    }
  }

  onInitGoogle() {
    if (isPlatformBrowser(this.platformId)) {
      console.log("tracking", this.trackingCode);
      const script = this.renderer.createElement("script") as HTMLScriptElement;
      script.src = `//www.googletagmanager.com/gtag/js?id=${this.trackingCode}`;
      script.async = true;
      this.renderer.appendChild(this.el.nativeElement, script);

      const script2 = this.renderer.createElement(
        "script"
      ) as HTMLScriptElement;
      const scriptBody = this.renderer.createText(`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', '${this.trackingCode}');
      `);
      this.renderer.appendChild(script2, scriptBody);
      this.renderer.appendChild(this.el.nativeElement, script2);
    }
  }
}
