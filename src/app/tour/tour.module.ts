import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursComponent } from './tours/tours.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';

import { SharedModule } from '../shared/shared.module';
import { TourRoutingModule } from './tour-routing.module';
import { CreateTourComponent } from './create-tour/create-tour.component';



@NgModule({
  declarations: [
    ToursComponent,
    TourDetailComponent,
    CreateTourComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    SharedModule
  ],
  exports: [
    ToursComponent
  ]
})
export class TourModule { }
