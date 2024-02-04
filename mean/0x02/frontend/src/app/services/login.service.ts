import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../interfaces/credential';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  URL: string = 'http://localhost:4100/sesion';
  httpClient = inject(HttpClient);

  login(credential: Credential) {
    return this.httpClient.post(this.URL, credential);
  }
}
