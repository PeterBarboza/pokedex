import style from './style.module.css'

import { Logo } from '../Logo'

import logoPng from '../../public/pokemon-logo.png'

//TODO: Inserir logo
export function Header() {
  return (
    <header className={style.header}>
      <Logo img={logoPng} text="Pokémon" />
    </header>
  )
}