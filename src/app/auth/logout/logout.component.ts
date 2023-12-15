import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout().subscribe({
      next: () => {
        // this.authService.user = null;
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
              console.log(error);
            }
    })

  }

}
