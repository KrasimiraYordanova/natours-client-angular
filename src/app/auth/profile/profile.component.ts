import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit{

    editMode: boolean = false;

  get user() {
    const {fullName, email} = this.authService.user!;
    return {
      fullName,
      email,
    }
  }

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.profileForm.setValue({name: this.user.fullName, email: this.user.email});
  }

  profileHandler(): void {
    if(this.profileForm.invalid) return;
    this.authService.user = {
      fullName: this.profileForm.value.name,
      email: this.profileForm.value.email,
    } as any
    this.toggleEditMode();
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

}