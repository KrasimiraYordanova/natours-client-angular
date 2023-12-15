import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-authenticating',
  templateUrl: './authenticating.component.html',
  styleUrls: ['./authenticating.component.scss']
})
export class AuthenticatingComponent implements OnInit{

  isAuthenticating: boolean = true;

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    this.authService.profile().subscribe({
      next: (user) => {
        // this.authService.user = user;
        this.isAuthenticating = false;
      },
      error: (err) => {
        // this.authService.user = null;
        this.isAuthenticating = false;
      }
    })
  }
}
