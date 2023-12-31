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

  private mySubscription: Subscription | undefined;

  constructor(private tourService: TourService) { }

  tours: ITour[] | null = null;

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
