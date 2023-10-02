import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
      this.tourService.getTours().subscribe((tours) => {
        console.log(tours);
      })
  }

}
