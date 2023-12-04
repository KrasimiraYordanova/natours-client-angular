import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours/tours.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';



@NgModule({
  declarations: [
    ToursComponent,
    TourDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToursComponent
  ]
})
export class TourModule { }
