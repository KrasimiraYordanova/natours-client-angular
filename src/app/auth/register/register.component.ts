import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchingPasswordsGroupValidator } from 'src/app/shared/validators/match-password-group-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator(['bg', 'com'])]],
    // difficulty: [''],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      rePassword: []
    }, {
      validators: [matchingPasswordsGroupValidator('password', 'rePassword')]
    })
  });

  registerHandler() {
    console.log(this.registerForm.value);
    if(this.registerForm.invalid) return;

    const { name, email,  pass: {password, rePassword} = {} } = this.registerForm.value;
    this.authService.register(name!, email!, password!, rePassword!).subscribe(user => {
      // saving user credentials to localStorage + set the cookie && settig the header with the token
      this.router.navigate(['/tour']);
    });
  }

}
