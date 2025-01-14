import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit{
  pokemon : Pokemon | undefined ;

  constructor(private route : ActivatedRoute,
              private router : Router,
              private pokemonService : PokemonService) {}

  ngOnInit(): void {
    const pokemonId : string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(
          pokemon => this.pokemon = pokemon )
    }
  }

  goToEditPokemon(pokemon : Pokemon){
    this.router.navigate(['edit/pokemon', pokemon.id])

  }
  goToPokemonList() {
    this.router.navigate(['pokemons'])
  }

  deletePokemon(pokemon : Pokemon){
    this.pokemonService.deletePokemon(pokemon.id)
        .subscribe(() => this.goToPokemonList())
  }


}
