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
    return this.httpClient.get<ITour>(`${apiUrl}/tours`);
  }

  mostPopularTours() {
    return this.httpClient.get<ITour>(`${apiUrl}/tours`);
  }
}
