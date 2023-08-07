import { pokeDataFormat, pokeAbilityFormat } from "./pokeDataFormat.js";


export class PokeAPI {
    
    async #getData(path) {
        const options = {
            method: 'GET',

        };
        const response = await fetch('https://pokeapi.co/api/v2/' + path, options);
        const pokeData = await response.json();
        return pokeData;
    };

    async getPokemon(pokeName) {
        const pokeNameData = await this.#getData(`pokemon/${pokeName}`);
        return pokeDataFormat(pokeNameData);
    }

    async getAbility(pokeAbility, lang) {
        const pokeAbilityData = await this.#getData(`ability/${pokeAbility}`)
        return pokeAbilityFormat(pokeAbilityData, lang);
    }
}
