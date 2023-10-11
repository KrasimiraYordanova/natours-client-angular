import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { NewTourComponent } from './new-tour/new-tour.component';

const routes: Routes = [
    {
        path: 'tour',
        children: [
            {
                path: '',
                component: TourComponent
            },
            {
                path: 'create',
                component: NewTourComponent
            },
            {
                path: 'detail/:id',
                component: TourDetailComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }