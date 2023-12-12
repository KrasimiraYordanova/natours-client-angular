import { Component, OnInit } from '@angular/core';
import { ITour } from 'src/app/shared/interfaces';
import { TourService } from '../tour.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.scss']
})
export class TourInfoComponent implements OnInit {

  tour: ITour | null = null;

  constructor(private tourService: TourService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.tourService.tour(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (tour) => {
        console.log(tour);
        // this.tour = tour;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
