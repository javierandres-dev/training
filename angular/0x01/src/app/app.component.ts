import { Component, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserComponent } from './components/user/user.component';
import { ParentComponent } from './components/parent/parent.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CarService } from './services/car.service';
import { ReversePipe } from './pipes/reverse.pipe';

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
    UpperCasePipe,
    ReversePipe,
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

  display = '';

  //carService = inject(CarService);

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join('⭐');
  }

  loudMessage = 'we think you are doing great!';

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  word = 'You are a champion';
}
