import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { matchingPasswordsValidator } from 'src/app/shared/validators/matchingPasswordsValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister = this.fb.group({
    name: ["Samantha Hall"],
    email: ["samh@gmail.com"],
    pass: this.fb.group({
      password: ["12345678"],
      rePassword: ["12345678"]
    }, {
      validators: [matchingPasswordsValidator('password', 'rePassword')]
    })
  })

  constructor(private fb: FormBuilder) { }

  registerHandler() {
    console.log(this.formRegister.value);
  }

}
