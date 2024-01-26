import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  template: `<app-navigation></app-navigation>
    <main class="container"><router-outlet></router-outlet></main>`,
  styles: ``,
})
export class AppComponent {}
