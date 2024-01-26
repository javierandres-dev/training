import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  constructor() {}

  URL: string = 'http://localhost:4100/regalos';
  httpClient = inject(HttpClient);

  getAllGifts() {
    return this.httpClient.get(this.URL);
  }

  deleteGift(id: string) {
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
