import { Component, Input } from '@angular/core';
import { ITour } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent {

  @Input()
  tour!: ITour;

  @Input()
  name: string | undefined;

}
