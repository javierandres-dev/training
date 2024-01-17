import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserComponent } from './components/user/user.component';
import { ParentComponent } from './components/parent/parent.component';
import { CommentsComponent } from './components/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    UserComponent,
    ParentComponent,
    CommentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'root';
  isServerRunning = true;
  isLoggedIn = true;
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  isEditable = true;
  message = '';
  nicknameOne = 'jey';

  logGreet() {
    console.log('Hello, World!');
  }

  showMessage() {
    this.message = 'Hey';
  }

  resetMesage() {
    this.message = '';
  }
}
