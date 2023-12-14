import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // emailValidation: boolean = true;

  constructor (private activatedRoute: ActivatedRoute ,private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  loginHandler(formLogin: NgForm) {

    const returnUrl = this.activatedRoute.snapshot.queryParams['currentUrl'] || '/';
    if(formLogin.invalid) return;
    const { email, password } = formLogin.value;
    this.authService.login(email!, password!)
    .subscribe(user => {
      console.log(user);
      this.authService.user = user;
      this.router.navigate([returnUrl]); 
    });
  }

}
