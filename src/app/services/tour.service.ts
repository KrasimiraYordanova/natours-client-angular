import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ITour } from '../interfaces/tour';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  getTours() {
    return this.httpClient.get<ITour[]>(`${apiURL}/tours`);
  }
}
