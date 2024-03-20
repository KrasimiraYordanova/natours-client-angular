import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { ITour } from 'src/app/shared/interfaces';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit{

  tours: ITour[] | null = null;

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.allTours().subscribe({
      next: (tours) => {
        console.log(tours);
        this.tours = tours;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
