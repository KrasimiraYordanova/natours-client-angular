import { Component, OnInit } from '@angular/core';
import { TourService } from 'src/app/services/tour.service';
import { ITour } from 'src/app/shared/interfaces/tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  tours: ITour[] | null = null;

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
      this.tourService.getTours().subscribe({
        next: (tours) => {
          this.tours = tours;
          console.log(this.tours);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}