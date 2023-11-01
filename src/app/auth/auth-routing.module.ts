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
    // canActivate: [AuthActivate],
    // data: {
    //   title: 'Login',
    //   authRequired: false
    // },
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    // canActivate: [AuthActivate],
    // data: {
    //   title: 'Register',
    //   authRequired: false
    // },
    component: RegisterComponent,
  },
  {
    path: 'auth/profile',
    canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      authRequired: true
    },
    component: ProfileComponent,
  },
  {
    path: 'auth/logout',
    canActivate: [AuthActivate],
    data: {
      authRequired: true
    },
    component: LogoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }