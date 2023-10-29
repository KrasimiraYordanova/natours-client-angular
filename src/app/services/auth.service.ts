import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  constructor(private httpClient: HttpClient) { }

  get isLoggedIn() {
    return this.user !== null;
  }
  
  register(name: string, email: string, password: string, rePassword: string) {
    return this.httpClient.post<IUser>(`/api/auth/register`, {name, email, password, rePassword});
  }

  login(email: string, password: string) {
    return this.httpClient.post<IUser>(`/api/auth/login`, {email, password});
  }
}
