import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursComponent } from './tours/tours.component';
import { CreateTourComponent } from './create-tour/create-tour.component';

const routes: Routes = [
  {
    path: 'tours',
    component: ToursComponent
  },
  {
    path: 'tour/create',
    component: CreateTourComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }