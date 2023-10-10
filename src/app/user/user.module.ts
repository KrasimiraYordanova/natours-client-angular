import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from './user-detail.guard';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'users',
        component: UserComponent
      },
      {
        path: 'users/detail/:id',
        canActivate: [AuthGuard],
        component: UserDetailComponent
      },
    ])
  ],
  exports: [
    UserComponent,
  ]
})
export class UserModule { }
