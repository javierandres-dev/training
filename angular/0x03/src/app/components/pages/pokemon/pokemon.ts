import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokeapi } from '../../../services/pokeapi';
import { IPokemon } from '../../../interfaces/pokemon';
import { Navigation } from '../../shared/navigation/navigation';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [Navigation, TitleCasePipe, NgOptimizedImage],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  private pokeapi = inject(Pokeapi);
  private route = inject(ActivatedRoute);
  pokemon!: IPokemon;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      this.pokeapi.getPokemonDetails(name).subscribe((response: any) => {
        const {
          id,
          name,
          height,
          weight,
          base_experience,
          abilities,
          types,
          sprites,
        } = response;
        this.pokemon = {
          id,
          name,
          height,
          weight,
          base_experience,
          abilityName: abilities[0].ability.name,
          typeName: types[0].type.name,
          front_default: sprites.front_default,
        };
      });
    });
  }
}
