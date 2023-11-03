import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authenticating',
  templateUrl: './authenticating.component.html',
  styleUrls: ['./authenticating.component.scss']
})
export class AuthenticatingComponent implements OnInit{
  isAuthenticating = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.authService.profile().subscribe({
        next: (user) => {
          console.log(user);
          this.isAuthenticating = false;
        },
        error: (error) => {
          console.log(error);
          this.isAuthenticating = false;
        },
        complete: () => {
          this.isAuthenticating = false;
        }
      })
  }
}
