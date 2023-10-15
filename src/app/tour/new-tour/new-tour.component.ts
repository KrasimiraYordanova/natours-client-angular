import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent {

  constructor(private fb: FormBuilder) {}

  tourForm = this.fb.group({
    tourName: [],
    description: [],
    locations: this.fb.array([
      this.fb.group({
        locationName: "Spring Mountains",
        coordinates: "42.193025, 24.346675",
        address: "Ivan Sokolov 35",
        description: "Something intersting"
      })
    ])
  })

  get locationsArray() {
    return(this.tourForm.get('locations') as FormArray);
  }

  newTourHandler() {
    console.log(this.tourForm)
    console.log(this.tourForm.value);
  }

  addLocationHandler(): void {
  }

}
