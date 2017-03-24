import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models';
import { UserService } from '../shared/services';

@Component({
  templateUrl: './front-page.component.html',
  styleUrls: ['front-page.component.scss']
})

export class FrontPageComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(`current user:`, this.currentUser);
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
