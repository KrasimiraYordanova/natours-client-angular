import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { TourComponent } from './tour/tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';


@NgModule({
  declarations: [
    TourComponent,
    TourDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'tours',
        component: TourComponent
      },
      {
        path: 'tours/detail/:id',
        component: TourDetailComponent
      },
    ])
  ],
  exports: [
    TourComponent
  ]
})
export class TourModule { }
