import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [authGuard()],
    data: {
      title: "Nature's tours | register",
      loginRequired: false
    }
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [authGuard()],
    data: {
      title: "Nature's tours | login",
      loginRequired: false
    }
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [authGuard()],
    data: {
      title: "Nature's tours | profile",
      loginRequired: true
    }
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    canActivate: [authGuard()],
    data: {
      title: "Nature's tours | logout",
      loginRequired: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
