import { useEffect, useState } from 'react'
import Head from 'next/head'

import type { NextPage } from 'next'
import { IFinalPokemonData } from '../types/IPokemon'

import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { PokeCard } from '../components/PokeCard'
import { Loader } from '../components/Loader'
import { MultiplyPokemonsBox } from '../components/MultiplyPokemonsBox'
import { GetMoreButton } from '../components/GetMoreButton'

import { setPokemonTypeColor } from '../utils/setPokemonTypeColor'
import { getTwentyPokemons, getPokemonDetails } from '../utils/getPokemonsApiData'
import { setFinalPokemonData } from '../utils/setPokemonFinalData'

const Home: NextPage = () => {
  const [pokemonsList, setPokemonsList] = useState<IFinalPokemonData[]>([])
  const [apiRoute, setApiRoute] = useState<string>('https://pokeapi.co/api/v2/pokemon')

  async function getPokemons() {
    const { results, next } = await getTwentyPokemons(apiRoute)
    const rawPokemonArr = await getPokemonDetails(results)
    const handledPokemonArr = await setFinalPokemonData(rawPokemonArr)

    const finalPokemonArr = await Promise.all(handledPokemonArr)

    setApiRoute(next)

    setPokemonsList((prev) => prev.concat(finalPokemonArr))
  }

  useEffect(() => {
    getPokemons()
    //eslint-disable-next-line
  }, [])

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
    <Layout>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokédex by Pedro Barboza" />
      </Head>
      <Header />
      <Main>
        {
          pokeCardsData.length > 0 ?
            <>
              <MultiplyPokemonsBox>
                {pokeCardsData}
              </MultiplyPokemonsBox>
              <GetMoreButton onClick={() => getPokemons()} isLoading={pokeCardsData} />
            </>
            :
            <Loader loadingMessage='Carregando' />
        }
      </Main>
      <Footer />
    </Layout>
  )
}

export default Home
