import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TourService } from '../tour.service';
import { INewTour } from 'src/app/shared/interfaces/newTour';
import { ITour } from 'src/app/shared/interfaces';

interface ILocation {
  coordinates: string,
  address: string,
  description: string
}

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss']
})
export class CreateTourComponent implements OnInit {

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

  tourSlug!: string;
  tour!: ITour | INewTour;

  constructor(private fb: FormBuilder, private router: Router, private tourService: TourService) { }

  get locations() {
    return this.tourForm.controls["locations"] as FormArray;
  }
  get guides() {
    return this.tourForm.controls["guides"] as FormArray;
  }

  ngOnInit(): void {
    // /////// WHY CANT ASSIGNE ID TO TOURID WITHOUT USING ANY
    this.tourService.tourSlug$$.subscribe((slug: string | any) => {
      console.log(slug);
      this.tourSlug = slug;
    })
    if (this.tourSlug) {
      this.tourService.tour(this.tourSlug).subscribe({
        next: tour => {
          this.tour = tour;
          this.tourForm.patchValue({
            name: tour.name,
            description: tour.description,
            duration: tour.duration,
            summary: tour.summary,
            difficulty: tour.difficulty,
            price: tour.price,
            priceDiscount: '',
            maxGroupSize: tour.maxGroupSize,
            startLocation: {
              coordinates: tour.startLocation.coordinates,
              address: tour.startLocation.address,
              description: tour.startLocation.description
            },
            // locations: tour.locations.foreach((location: any) => {
            //   const obj = {
            //     coordinates: location.coordinates,
            //     address: location.address,
            //     description: location.description
            //   }
            // }),
          });
        },
        error(err) {
          console.log(err);
        },
      })
    }
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
    let { name, description, duration, summary, difficulty, price, priceDiscount, maxGroupSize, guides, locations, startLocation } = this.tourForm.value;

    locations = locations?.map((loc: ILocation | any) => {
      loc.coordinates = loc.coordinates.split(', ');
      loc.coordinates[0] = Number(loc.coordinates[0]);
      loc.coordinates[1] = Number(loc.coordinates[1]);
      return loc;
    });

    const startCoords = startLocation?.coordinates?.split(', ');
    const lat = Number(startCoords![0]);
    const lng = Number(startCoords![1]);

    const tour: INewTour | any = {
      name,
      description,
      duration: Number(duration),
      summary,
      difficulty,
      price: Number(price),
      priceDiscount: Number(priceDiscount),
      maxGroupSize: Number(maxGroupSize),
      guides,
      locations,
      startLocation: {
        coordinates: [lat, lng],
        address: startLocation?.address,
        description: startLocation!.description
      }
    }

    if (this.tourForm.invalid) return;
    this.tourService.createTour(tour).subscribe(tour => {
      this.router.navigate([`/tours`]);
    });
  }
}

