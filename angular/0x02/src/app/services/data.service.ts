import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  API_URL: string = 'https://big-bang-theory-api.lesalvucci.workers.dev/all';

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get(this.API_URL);
  }
}
