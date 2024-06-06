import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-byn-view-html',
  templateUrl: './byn-view-html.component.html',
  styleUrls: ['./byn-view-html.component.css']
})
export class BynViewHtmlComponent implements OnChanges {
  @Input() content: string = '';
  sanitizedContent: SafeHtml|any;

  constructor(private sanitizer: DomSanitizer){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
