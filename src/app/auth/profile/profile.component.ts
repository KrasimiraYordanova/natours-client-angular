import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  editMode = false;
  isSubmitted = false;

  get user() {
    const { fullName, email } = this.authService.user!;
    return {
      fullName,
      email
    }
  }

  constructor(private authService: AuthService, private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.profileForm.setValue({name: this.user.fullName, email: this.user.email});
  }

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, emailValidator(['bg', 'com'])]]
  })
  
  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if(this.editMode) {
      this.isSubmitted = false;
    }
  }

  profileHandler(): void {
    this.isSubmitted = true;
    if(this.profileForm.invalid) return;
    const { name, email } = this.profileForm.value;
    this.authService.user = {
      _id: "2",
      fullName: name,
      email
    } as any;
    this.toggleEditMode();
    console.log(this.profileForm.value)
  }
}
