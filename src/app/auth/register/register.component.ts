import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchingPasswordsGroupValidator } from 'src/app/shared/validators/match-password-group-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder) {}

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
  }

}
