import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.user = {
      _id: '1',
      fullName: 'Chloe Smith',
      email: 'chloes@abv.bg',
      photo: 'image1.jpg'
    }

    this.router.navigate(['/']);
  }


}
