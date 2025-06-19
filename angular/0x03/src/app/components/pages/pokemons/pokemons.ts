import { Component, inject, OnInit } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { Pokeapi } from '../../../services/pokeapi';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  imports: [Navigation, RouterLink],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons implements OnInit {
  private pokeapi = inject(Pokeapi);
  pokemons!: any[];

  ngOnInit() {
    this.pokeapi.getPokemonList().subscribe((response: any) => {
      this.pokemons = response.results;
    });
  }
}
