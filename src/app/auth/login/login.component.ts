import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // another way to take reference to the form
  // @ViewChild('loginForm', {static: true}) loginForm!: NgForm; 
  // @ViewChild(NgForm, {static: true}) loginForm!: ElementRef<HTMLInputElement>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    console.log(this.activatedRoute);
  }

  loginHandler(loginForm: NgForm) {
    console.log(loginForm.value);
    if(loginForm.invalid) return;

    const { email, password } = loginForm.value;
    this.authService.login(email!, password!).subscribe(user => {
      this.authService.user = user;
      // saving user credentials to localStorage + set the cookie && settig the header with the token
      this.router.navigate(['/']);
    });
  }

}
