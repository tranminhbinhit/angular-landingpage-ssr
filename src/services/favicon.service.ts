import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaviconService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setFavicon(url: string) {
    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.rel = 'icon';
    link.href = url;

    const head = this.renderer.selectRootElement('head', true);
    const existingLinks = head.getElementsByTagName('link');

    for (let i = 0; i < existingLinks.length; i++) {
      if (existingLinks[i].rel === 'icon') {
        this.renderer.removeChild(head, existingLinks[i]);
      }
    }

    this.renderer.appendChild(head, link);
  }
}