import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours/tours.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ToursComponent,
    TourDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ToursComponent
  ]
})
export class TourModule { }
