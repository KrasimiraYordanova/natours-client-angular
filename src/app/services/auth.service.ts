import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  constructor(private httpClient: HttpClient) { }

  get isLoggedIn() {
    return this.user !== null;
  }
  
  register(fullName: string, email: string, password: string, rePassword: string) {
    return this.httpClient.post<any>(`${environment.apiURL}/auth/register`, {fullName, email, password, rePassword});
  }

  login(email: string, password: string, rePassword: string) {
    return this.httpClient.post<any>(`${environment.apiURL}/auth/login`, {email, password, rePassword});
  }
}
