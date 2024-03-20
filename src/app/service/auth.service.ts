import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { IAuth } from '../shared/interfaces/auth';
import { BehaviorSubject, Subscription, catchError, filter, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{

  private user$$ = new BehaviorSubject<undefined | null | IUser | IAuth>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | IAuth | null => val !== undefined));

  user: IUser | null = null;

  get isLogged() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) { 
    this.subscription = this.user$.subscribe( user => {
        this.user = user;
      })
  }

  register(name: string, email: string, password: string, rePassword: string) {
    return this.http.post<IAuth>(`api/auth/register`, { name, email, password, rePassword })
    .pipe(tap(user => this.user$$.next(user)));
  }
  
  login(email: string, password: string) {
    return this.http.post<IAuth>(`/api/auth/login`, { email, password })
    .pipe(tap(user => this.user$$.next(user)));;
  }

  profile() {
    return this.http.get<IUser>(`/api/users/me`)
    .pipe(tap(user => this.user$$.next(user)),
    catchError((err) => {
      this.user$$.next(null);
      return of(err);
    })
    );;
  }

  logout() {
    return this.http.post<IUser | IAuth>(`/api/auth/logout`, {})
    .pipe(tap(user => this.user$$.next(null)));;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}