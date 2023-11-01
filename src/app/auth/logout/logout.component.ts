import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    // this.authService.logout().subscribe({
    //   next: () => {
    //     this.router.navigate(['/']);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })
  }
  
}
