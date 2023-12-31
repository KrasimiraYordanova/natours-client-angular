import { Component, Input, OnInit } from '@angular/core';
import { ITour } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit{

  @Input()
  tour!: ITour;

  ngOnInit(): void {
    console.log(this.tour);
  }

}
