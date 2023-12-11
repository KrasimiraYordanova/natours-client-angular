import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get isLogged() {
    return this.authService.isLogged;
  }

  get user() {
    return this.authService.user;
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
      
  }

}
