import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() name = '';
  @Input() nickname = '';

  logoUrl = '/assets/logo.png';
  logoAlt = 'javi helmet logo';
  username = 'youngTech';
}
