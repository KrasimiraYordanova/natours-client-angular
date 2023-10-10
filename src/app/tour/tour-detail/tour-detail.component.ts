import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/services/tour.service';
import { ITour } from 'src/app/shared/interfaces/tour';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  tour: ITour | null = null;

  constructor(private tourService: TourService, private activatedRout: ActivatedRoute) {
    console.log(this.activatedRout.snapshot.params);
    this.activatedRout.params.subscribe(console.log); 
  }

  ngOnInit(): void {
  }
}
