import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursComponent } from './tours/tours.component';
import { TourDetailComponent } from './tours/tour-detail/tour-detail.component';

import { SharedModule } from '../shared/shared.module';
import { TourRoutingModule } from './tour-routing.module';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToursComponent,
    TourDetailComponent,
    CreateTourComponent,
    TourInfoComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ToursComponent
  ]
})
export class TourModule { }
