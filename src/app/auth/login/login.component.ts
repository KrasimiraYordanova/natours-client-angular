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
  @ViewChild(NgForm, {static: true}) loginForm!: ElementRef<HTMLInputElement>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    console.log(this.activatedRoute);
  }

  handleFormSubmit(form: NgForm): void {
    console.log(form);
    if(form.invalid) return;
     {
      const value: {email: string; password: string} = form.value;
      console.log(value);
      form.reset();
    }
  };

}
