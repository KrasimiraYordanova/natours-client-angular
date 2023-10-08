import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourComponent } from './tour.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TourComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TourComponent
  ]
})
export class TourModule { }
