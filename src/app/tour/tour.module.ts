import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-router.module';
import { SharedModule } from '../shared/shared.module';

import { TourComponent } from './tour/tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { NewTourComponent } from './new-tour/new-tour.component';


@NgModule({
  declarations: [
    TourComponent,
    TourDetailComponent,
    NewTourComponent,
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    SharedModule,
  ],
  exports: [
    TourComponent,
    NewTourComponent
  ]
})
export class TourModule { }
