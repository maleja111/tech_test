import assert from 'assert';
import { PokeAPI } from '../pokeapi.js'

const client = new PokeAPI();

const pokemon = await client.getPokemon('pikachu');

describe('Poke information', () => {
    describe('Get pokemon/pikachu', () => {
        it('should get the correct data', () => {
            assert.equal(pokemon.name, 'pikachu')
            assert.equal(pokemon.type, 'electric')
            assert.equal(pokemon.abilities.length, 2)
            assert.equal(pokemon.abilities[0], 'static')
            assert.equal(pokemon.abilities[1], 'lightning-rod')
        });
    });
}); 