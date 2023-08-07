import { PokeAPI } from './pokeapi.js'
import assert from 'node:assert'

const client = new PokeAPI();

const pokemon = await client.getPokemon('pikachu');
// console.log('POkemon data: ', pokemon);

const pokemonAbility = await client.getAbility('battle-armor', 'en');
console.log(pokemonAbility);

// Check if it works
assert.equal(pokemon.name, 'pikachu')
assert.equal(pokemon.type, 'electric')
assert.equal(pokemon.abilities.length, 2)
assert.equal(pokemon.abilities[0], 'static')
assert.equal(pokemon.abilities[1], 'lightning-rod')