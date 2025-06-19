import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Pokeapi {
  constructor() {}

  private httpClient = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemonList(limit: number = 10, offset: number = 0) {
    return this.httpClient.get(
      `${this.baseUrl}?limit=${limit}&offset=${offset}`
    );
  }

  getPokemonDetails(name: string) {
    return this.httpClient.get(`${this.baseUrl}/${name}`);
  }
}
