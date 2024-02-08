import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credential } from '../interfaces/credential';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  URL: string = 'http://localhost:4100/sesion';
  httpClient = inject(HttpClient);
  router = inject(Router);

  login(credential: Credential) {
    return this.httpClient.post(this.URL, credential);
  }

  isLogged() {
    if (localStorage.getItem('token')) return true;
    else return false;
  }

  logout() {
    //localStorage.removeItem('token');
    //localStorage.removeItem('data');
    localStorage.clear();
    //this.router.navigate(['/login']);
    this.router.navigateByUrl('/login');
  }
}
