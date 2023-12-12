import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursComponent } from './tours/tours.component';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'tours',
    component: ToursComponent,
    canActivate: [authGuard()],
    data: {
        title: "Nature's tours | all tours",
        loginRequired: false
      }
  },
  {
    path: 'tour',
    children: [
        {
            path: 'create',
            component: CreateTourComponent,
            canActivate: [authGuard()],
            data: {
                title: "Nature's tours | create tour",
                loginRequired: true
              }
          },
          {
            path: 'info/:id',
            component: TourInfoComponent,
            canActivate: [authGuard()],
            data: {
                title: "Nature's tours | tour info",
                loginRequired: false
              }
          },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }