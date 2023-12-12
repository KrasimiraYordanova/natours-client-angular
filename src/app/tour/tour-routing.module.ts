import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursComponent } from './tours/tours.component';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourInfoComponent } from './tour-info/tour-info.component';

const routes: Routes = [
  {
    path: 'tours',
    component: ToursComponent,
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
            data: {
                title: "Nature's tours | create tour",
                loginRequired: true
              }
          },
          {
            path: 'info/:id',
            component: TourInfoComponent,
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