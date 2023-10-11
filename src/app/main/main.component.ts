import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements DoCheck {

  // we can use getter or DoCheck lifecycle hook, this will garantee the changes of the value
  // get isLogged() {
  //   return this.authService.isLoggedIn;
  // }
  isLogged!: boolean;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
      this.isLogged = this.authService.isLoggedIn;
  }
}
