import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
      console.log(`Vous avez choisi ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez choisi un pokemon qui n'existe pas`);
      this.pokemonSelected = undefined;
    }
  }
}