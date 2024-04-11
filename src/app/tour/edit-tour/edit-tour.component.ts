import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITour } from 'src/app/shared/interfaces';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { INewTour } from 'src/app/shared/interfaces/newTour';

interface ILocation {
  coordinates: string,
  address: string,
  description: string
}

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent implements OnInit {

  tourForm = this.fb.group({
    name: [''],
    description: [''],
    duration: [''],
    summary: [''],
    difficulty: [''],
    price: [''],
    priceDiscount: [''],
    maxGroupSize: [''],
    coverImage: '',
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

  tourSlug: string = this.activatedRoute.snapshot.params['slug'];
  tour!: ITour | INewTour;

  fileName = '';


  constructor(private tourService: TourService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {}
  

  ngOnInit(): void {
      this.tourService.tourId(this.tourSlug).subscribe({
        next: tour => {
          this.tourForm.patchValue({
            name: tour.name,
            description: tour.description,
            duration: tour.duration,
            summary: tour.summary,
            difficulty: tour.difficulty,
            price: tour.price,
            priceDiscount: '',
            maxGroupSize: tour.maxGroupSize,
            coverImage: tour.imageCover,
            startLocation: {
              coordinates: tour.startLocation.coordinates.join(','),
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

  get locations() {
    return this.tourForm.controls["locations"] as FormArray;
  }
  get guides() {
    return this.tourForm.controls["guides"] as FormArray;
  }

  onFileSelected(event:Event): void {
    console.log(event);
    const input = event.target as HTMLInputElement;
    console.log(input);

    // const file = input.files[0];
    // console.log(file);
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
    let { name, description, duration, summary, difficulty, price, priceDiscount, maxGroupSize, coverImage, startLocation, locations, guides } = this.tourForm.value;

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
      imageCover: coverImage,
      guides,
      locations,
      startLocation: {
        coordinates: [lat, lng],
        address: startLocation?.address,
        description: startLocation!.description
      }
    }

    if (this.tourForm.invalid) return;
    this.tourService.updateTour(this.activatedRoute.snapshot.params['slug'], tour).subscribe(tour => {
      this.router.navigate([`/tour/${this.tourSlug}`]);
    });
  }
}
