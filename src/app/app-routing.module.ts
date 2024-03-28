import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: "Nature's tours"
    }
  },
  // {
  //   path: 'tours',
  //   loadChildren: () => import('./tour/tour.module').then(m => m.TourModule)
  // },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: {
      title: "Nature's tours | not found page"
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
