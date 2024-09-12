import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy_users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedId); //! if not found returns undefined value
  }
  onSelectUser(id: string) {
    // console.log('Selected user with id: '+id);
    this.selectedId = id;
  }
}
