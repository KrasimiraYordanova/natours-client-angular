import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-router.module';
import { SharedModule } from '../shared/shared.module';

import { TourComponent } from './tour/tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { NewTourComponent } from './new-tour/new-tour.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
  ],
  exports: [
    TourComponent,
    NewTourComponent
  ]
})
export class TourModule { }
