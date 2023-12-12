import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor (private activatedRoute: ActivatedRoute ,private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.user = null;
    // // this.authService.user = {
    // //   fullName: "Jane",
    // //   email: "janeSmith@gmail.com"
    // // } as any
    // // this.router.navigate(['/']); 
  }

  loginHandler() {
    this.authService.user = {
      fullName: "Jane",
      email: "janeSmith@gmail.com"
    } as any

    const returnUrl = this.activatedRoute.snapshot.queryParams['currentUrl'] || '/';
    console.log(this.activatedRoute);
    this.router.navigate([returnUrl]); 
  }

}
