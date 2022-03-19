import { ReactNode } from 'react'

import style from './style.module.css'

type mainProps = {
  children: ReactNode
}
//TODO: Adicionar chamada a API dos pokemons
export function Main(props: mainProps) {
  return (
    <main className={style.main}>
      <form action="" className={style.form}>
        <input type="text" className={style.formInput} placeholder="Nome ou o ID do pokemon" />
        <input type="submit" className={style.formButton} value="Buscar" />
      </form>
      <div className={style.pokemons}>
        {props.children}
      </div>
    </main>
  )
}