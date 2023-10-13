import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    name: ['test123'],
    email: ['test123@gmail.com'],
    difficulty: ['easy'],
    pass: this.fb.group({
      password: ['123456'],
      rePassword: ['123456']
    }, {
      validators: []
    })
  });

}
