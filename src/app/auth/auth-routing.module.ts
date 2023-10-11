import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../shared/guards/auth.activate';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Login',
      authRequired: false
    }
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Register',
      authRequired: false
    }
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      authRequired: true
    }
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
      authRequired: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }