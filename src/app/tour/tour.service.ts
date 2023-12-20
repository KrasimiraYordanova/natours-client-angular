import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITour } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  allTours() {
    return this.httpClient.get<ITour[]>(`/api/tours`);
  }

  tour(slug: string) {
    return this.httpClient.get<ITour>(`/api/tours/${slug}`);
  } 

  // last 9 tour created to be changed to most popular tours
  mostPopularTours() {
    return this.httpClient.get<ITour[]>(`/api/tours?limit=9`);
  }

  createTour(tour: ITour) {
    return this.httpClient.post<ITour>(`/api/tours`, tour);
  }
}
