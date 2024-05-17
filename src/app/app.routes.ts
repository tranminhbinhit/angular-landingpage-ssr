import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'Public Page' },
    //children: CONTENT_ROUTES,
  },
  { path: '**', redirectTo: '' },
];
