import axios from 'axios'

import { IFirstPokemonData, IFinalPokemonRawData, IFirstReqData } from '../types/IPokemon'

async function getTwentyPokemons(url: string) {
  const { data } = await axios.get(url)

  return {
    results: data.results as IFirstPokemonData[],
    next: data.next
  }
}

async function getPokemonDetails(firstPokemonArr: IFirstPokemonData[]) {
  const pokemonArr = firstPokemonArr.map(async (pokemon) => {
    const { data } = await axios.get(pokemon.url)

    const pokemonData: IFinalPokemonRawData = {
      name: data.name,
      id: data.id,
      sprites: data.sprites,
      stats: data.stats,
      types: data.types,
    }

    return pokemonData
  })

  return pokemonArr
}

export { getTwentyPokemons, getPokemonDetails }
