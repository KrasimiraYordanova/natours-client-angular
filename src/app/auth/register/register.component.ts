import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { matchingPasswordsValidator } from 'src/app/shared/validators/matchingPasswordsValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      rePassword: []
    }, {
      validators: [matchingPasswordsValidator('password', 'rePassword')]
    })
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler() {
    console.log(this.formRegister.value);
    if(this.formRegister.invalid) return;
    const { name, email, pass: {password, rePassword} = {} } = this.formRegister.value;
    this.authService.register(name!, email!, password!, rePassword!)
    .subscribe(user => {
      console.log(user);
      this.authService.user = user;
      this.router.navigate(['/tours']);
    });
    
  }
}


// saving user credentials to localStorage + set the cookie && settig the header with the token
