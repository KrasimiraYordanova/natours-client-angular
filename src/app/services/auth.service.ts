import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val != undefined));

  user: IUser | null = null;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private httpClient: HttpClient) { 
    this.subscription = this.user$.subscribe(user => this.user = user);
  }
  
  register(name: string, email: string, password: string, rePassword: string) {
    return this.httpClient.post<IUser>(`/api/auth/register`, {name, email, password, rePassword})
    .pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.httpClient.post<IUser>(`/api/auth/login`, {email, password})
    .pipe(tap(user => this.user$$.next(user)));
  }

  logout() {
    return this.httpClient.post<void>('/api/auth/logout', {})
    .pipe(tap(() => this.user$$.next(null)));
  }

  profile() {
    return this.httpClient.get<IUser>('/api/users/me')
    .pipe(tap(user => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
