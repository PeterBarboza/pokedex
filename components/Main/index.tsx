import { FormEvent, ReactNode, useState } from 'react'
import axios from 'axios'

import { IFinalPokemonData, IFinalPokemonRawData } from '../../types/IPokemon'

import { PokeCard } from '../PokeCard'
import { MultiplyPokemonsBox } from '../MultiplyPokemonsBox'

import { setFinalPokemonData } from '../../utils/setPokemonFinalData'
import { setPokemonTypeColor } from '../../utils/setPokemonTypeColor'

import style from './style.module.css'

type mainProps = {
  children: ReactNode
}
export function Main(props: mainProps) {
  const [pokemonsList, setPokemonList] = useState<IFinalPokemonData[]>([])
  const [query, setQuery] = useState<string>('')

  const baseRoute = "https://pokeapi.co/api/v2/pokemon/"

  async function getPokemonByNameOrId(query: string, event: FormEvent) {
    event.preventDefault()

    if (query.length === 0) return

    try {
      const rawPokemon: IFinalPokemonRawData = (await axios.get(baseRoute + query)).data
      const handledPokemonArr = await setFinalPokemonData([rawPokemon])
      const finalPokemonArr = await Promise.all(handledPokemonArr)
      setPokemonList([])
      setPokemonList(finalPokemonArr)
      setQuery('')
    } catch (error) {
      window.alert("Falha na busca, por favor insira um nome ou ID referente a um pokémon.")
    }


  }

  const pokeCardsData = pokemonsList.map((pokemon) => {
    const { name, id, img, status, type1, type2 } = pokemon
    return (
      <PokeCard
        name={name}
        id={id}
        img={img}
        status={status}
        type1={type1}
        typeColor1={setPokemonTypeColor(type1)}
        type2={type2}
        typeColor2={setPokemonTypeColor(type2)}
        key={id}
      />
    )
  })

  return (
    <main className={style.main}>
      <form className={style.form} onSubmit={(event) => getPokemonByNameOrId(query, event)}>
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value.trim().toLowerCase())
        } className={style.formInput} placeholder="Nome ou o ID do pokemon" />
        <input type="submit" className={style.formButton} value="Buscar" />
      </form>
      <a className={style.getAllBtn} onClick={() => setPokemonList([])}>Buscar todos</a>
      <div className={style.pokemons}>
        {pokemonsList.length > 0 ?
          pokeCardsData
          :
          props.children
        }
      </div>
    </main>
  )
}