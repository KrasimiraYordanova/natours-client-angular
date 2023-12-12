import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ITour } from '../shared/interfaces';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  allTours() {
    return this.httpClient.get<ITour[]>(`${apiUrl}/tours`);
  }

  tour(id: string) {
    return this.httpClient.get<ITour>(`${apiUrl}/tours/${id}`);
  } 

  // last 9 tour created to be changed to most popular tours
  mostPopularTours() {
    return this.httpClient.get<ITour[]>(`${apiUrl}/tours?limit=9`);
  }
}
