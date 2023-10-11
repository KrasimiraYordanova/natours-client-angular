import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    console.log(this.activatedRoute);
  }

  loginHandler(): void {
    this.authService.user = {
      fullName: "Chloe Smith",
      email: "chloes@abv.bg"
    } as any;

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}
