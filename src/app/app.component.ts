import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { PageService } from '../services/page.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  dataInfo: any;
  constructor(
    private pageService: PageService) {
  }
  data = inject(DataService).value;
  title = 'angular-test';


  ngOnInit(): void {
    this.innitData();
  }

  innitData() {
    const nameRewrite = 'localhost';
    
    this.pageService.getPageDetail({
      NameRewrite: nameRewrite
    }).subscribe(res => {
      this.dataInfo = res?.Data || {};
      // console.log(this.dataInfo)
    })
  }

}

