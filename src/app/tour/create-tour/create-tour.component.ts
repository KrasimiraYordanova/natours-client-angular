import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss']
})
export class CreateTourComponent {

  tourForm = this.fb.group({
   name: [''],
   description: [''],
   duration: [''],
   summary: [''],
   difficulty: [''],
   price: [''],
   priceDiscount: [''],
   maxGroupSize: [''],
   startLocation: this.fb.group({
    coordinates: [''],
    address: [''],
    description: []
  }, {
    validators: []
  }),
  locations: this.fb.array([]),
  guides: this.fb.array([])
  })

  constructor(private fb: FormBuilder, private router: Router, private tourService: TourService) { }

  get locations() {
    return this.tourForm.controls["locations"] as FormArray;
  }
  get guides() {
    return this.tourForm.controls["guides"] as FormArray;
  }

  addLocation() {
    const locationForm = this.fb.group({
      coordinates: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
    });
  
    this.locations.push(locationForm);
  }

  deleteLocation(locationIndex: number) {
    this.locations.removeAt(locationIndex);
  }

  addGuide() {
    const guideForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.guides.push(guideForm);
  }

  deleteGuide(guideIndex: number) {
    this.guides.removeAt(guideIndex);
  }

  tourHandler() {
    console.log(this.tourForm.value);

    if(this.tourForm.invalid) return;
    // this.tourService.createTour({}as any).subscribe(tour => {
    //   console.log(tour);
    //   this.router.navigate(['/tour/info/']);
    // });
  }
}

