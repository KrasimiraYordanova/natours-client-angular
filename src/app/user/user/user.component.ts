import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../shared/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUser[] | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.loadUsers().subscribe({
        next: (users) => {
          console.log(users);
          this.users = users;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
