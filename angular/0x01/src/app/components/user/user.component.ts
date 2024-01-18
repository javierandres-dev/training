import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() name = '';
  @Input() nickname = '';

  logoUrl = '/assets/logo.png';
  logoAlt = 'javi helmet logo';
  username = 'youngTech';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

  profileForm1 = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  handleSubmit1() {
    console.log(this.profileForm1.value);
  }
}
