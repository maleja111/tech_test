export function pokeDataFormat(data) {
    const newData = {
        name: data?.name,
        type: data?.types[0]?.type?.name,
        abilities: data?.abilities.map((ability) => ability?.ability?.name)
    }
    return newData;
}

export function pokeAbilityFormat(data, lang = 'en') {
    const newAbilityData = {
        name : data?.names.filter((name) => name?.language.name === lang)[0].name,
        lenguage : data?.names.filter((name) => name?.language.name === lang)[0].language.name,
        effect : data?.effect_entries.filter((effect) => effect?.language?.name === lang)[0]?.effect
    }
    return newAbilityData;
}