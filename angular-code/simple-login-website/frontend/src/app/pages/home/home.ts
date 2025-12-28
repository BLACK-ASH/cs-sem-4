import { Component, inject, signal } from '@angular/core';
import { Users, UserType } from '../../services/users/users';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  userService = inject(Users);

  users = signal<UserType[]>([]);

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users.set(res)
      console.log(res);
    })
  }
}
