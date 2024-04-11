import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITour } from '../shared/interfaces';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { INewTour } from '../shared/interfaces/newTour';
import { INewReview } from '../shared/interfaces/newReview';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  // public tourSlug$$ = new BehaviorSubject<string | null>(null);

  constructor(private httpClient: HttpClient) { }

  // sendTourSlug(slug: string) {
  //   this.tourSlug$$.next(slug);
  // }

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

  tourId(id: string) {
    return this.httpClient.get<ITour | any>(`/api/tours/${id}`)
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
    return this.httpClient.post<INewTour | ITour>(`/api/tours`, tour);
  }

  createReviewForTour(slug: string, review: INewReview) {
    return this.httpClient.post<INewTour | ITour>(`/api/tours/${slug}/reviews`, review);
  }

  updateTour(slug: string, tour: INewTour) {
    return this.httpClient.put<ITour | INewTour>(`/api/tours/${slug}`, tour);
  }

  deleteTour(id: string) {
    return this.httpClient.delete<ITour>(`/api/tours/${id}`);
  }
}
