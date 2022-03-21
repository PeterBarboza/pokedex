import { getPokemonDetails } from './getPokemonsApiData'

import { IFinalPokemonData, IFinalPokemonRawData } from '../types/IPokemon'

export async function setFinalPokemonData(finalPokemonRawArr: any[]) {

  const finalPokemonArr = finalPokemonRawArr.map(async res => {
    const { name, id, sprites, stats, types } = await res

    if (types.length > 1) {
      const pokemonFinalData: IFinalPokemonData = {
        name: name,
        id: id,
        img: sprites.front_default,
        status: {
          hp: stats[0].base_stat,
          atk: stats[1].base_stat,
          def: stats[2].base_stat,
          spAtk: stats[3].base_stat,
          spDef: stats[4].base_stat,
          speed: stats[5].base_stat
        },
        type1: types[0].type.name,
        type2: types[1].type.name
      }

      return pokemonFinalData
    } else {
      const pokemonFinalData: IFinalPokemonData = {
        name: name,
        id: id,
        img: sprites.front_default,
        status: {
          hp: stats[0].base_stat,
          atk: stats[1].base_stat,
          def: stats[2].base_stat,
          spAtk: stats[3].base_stat,
          spDef: stats[4].base_stat,
          speed: stats[5].base_stat
        },
        type1: types[0].type.name,
      }

      return pokemonFinalData
    }
  })

  return finalPokemonArr
}
