import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gift } from '../interfaces/gifts';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  constructor() {}

  URL: string = 'http://localhost:4100/regalos';
  httpClient = inject(HttpClient);

  postGift(gift: Gift) {
    return this.httpClient.post(this.URL, gift);
  }

  getAllGifts() {
    return this.httpClient.get(this.URL);
  }

  getGift(id: string) {
    return this.httpClient.get(`${this.URL}/${id}`);
  }

  updateGift(id: string, gift: Gift) {
    return this.httpClient.put(`${this.URL}/${id}`, gift);
  }

  deleteGift(id: string) {
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
