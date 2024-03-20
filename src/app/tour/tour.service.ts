import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITour } from '../shared/interfaces';
import { Subject, map, tap } from 'rxjs';
import { INewTour } from '../shared/interfaces/newTour';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  allTours() {
    return this.httpClient.get<ITour[]>(`/api/tours`);
  }

  tour(slug: string) {
    return this.httpClient.get<ITour | any>(`/api/tours/${slug}`)
    .pipe(map((tour) => {
      let locationsTour: any | null = null;
       locationsTour = tour.locations.map((location: { type: any; coordinates: any[]; description: any; }) => {
          return {
              "type": "Feature",
              "geometry": {
                "type": location.type,
                "coordinates": [location.coordinates[0], location.coordinates[1]]
              },
              "properties": {
                "name": location.description
              }
            }
          });
          tour.locations = {"type": "FeatureCollection", "features": locationsTour};
          return tour;
    }));
  } 

  // TO DO
  mostPopularTours() {
    return this.httpClient.get<ITour[]>(`/api/tours?limit=9`);
  }

  createTour(tour: INewTour) {
    return this.httpClient.post<INewTour | ITour | any>(`/api/tours`, tour);
  }
}
