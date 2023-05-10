import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.components.html',
  styles: []
})
export class AppComponent implements OnInit {
 
 pokemonList: Pokemon[] = POKEMONS; 
 pokemonSelected : Pokemon |undefined
 
 ngOnInit(): void {
     console.table(this.pokemonList);
     //this.selectPokemon(this.pokemonList[1])
 }

 selectPokemon(pokemonId: Pokemon ){
  const pokemon : Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === + pokemonId);
  if(pokemon){
  console.log(`vous avez cliqué sur le pokemon ${pokemon.name}`);
  this.pokemonSelected = pokemon
 } else 
 {
  console.log("Aucun pokemon n'a ete trouve avez");
  this.pokemonSelected = pokemon
 }

}

}