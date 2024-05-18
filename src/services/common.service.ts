import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Meta, Title } from "@angular/platform-browser";
import { isEmpty, isEmptyObject } from "../utils/utils";
import { seoInfoDefault } from "../app/app.setting";
// import { Papa } from "ngx-papaparse";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public isLoading: boolean = false;

  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(
    private title: Title,
    private meta: Meta,
    // private papa: Papa
  ) {}

  //Seo Page
  initSeoPage(
    seoInfo: {
      title?: string;
      image?: string;
      keyword?: string;
      description?: string;
    } = { title: "", image: "", keyword: "", description: "" }
  ) {
    let title = seoInfoDefault.title;
    let image = seoInfoDefault.image;
    let keyword = seoInfoDefault.keyword;
    let description = seoInfoDefault.description;
    if (!isEmpty(seoInfo.title)) {
      title = seoInfo.title || '';
    }

    if (!isEmpty(seoInfo.image)) {
      image = seoInfo.image || '';
    }

    if (!isEmpty(seoInfo.description)) {
      description = seoInfo.description || '';
    }

    if (!isEmpty(seoInfo.keyword)) {
      keyword = seoInfo.keyword || '';
    }

    this.title.setTitle(title);
    this.meta.addTags([
      {
        name: "og:image",
        content: image,
      },
      {
        name: "twitter:image:src",
        content: image,
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "keywords",
        content: keyword,
      },

    ]);
  }
}
