import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {}
  
  // get isLogged() {
  //   return this.authService.isLoggedIn;
  // }

  // get user() {
  //   return this.authService.user;
  // }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.isLogged = !user ? false : true;
      this.user = user;
    })
  }
  isLogged = false;
  user: any | null = null;
  // private userSub = Subscription;
}
