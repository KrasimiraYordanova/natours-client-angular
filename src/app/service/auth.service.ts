import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLogged() {
    return this.user !== null;
  }

  constructor(private router: Router) { }


}
