import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuth } from '../shared/interfaces/auth';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLogged() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string, rePassword: string) {
    return this.http.post<IAuth>(`${apiUrl}/auth/register`, { name, email, password, rePassword });
  }
  
  login(email: string, password: string) {
    return this.http.post<IAuth>(`/api/auth/login`, { email, password });
  }

  profile() {
    return this.http.get<IUser>(`/api/users/me`);
  }

  logout() {
    return this.http.post<IUser>(`/api/auth/logout`, {});
  }
}