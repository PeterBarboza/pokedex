import { Logo } from '../Logo'

import logoPng from '../../public/pokemon-logo.png'
import style from './style.module.css'

export function Footer() {
  return (
    <footer className={style.footer}>
      <Logo img={logoPng} text="Pokémon" />
      <div className={style.footerNotes}>
        <h2>Pokédex by Pedro Barboza</h2>
        <h3>Follow on the social medias</h3>
        <ul className={style.contactList}>
          <li>Github: <a href="#">@PeterBarboza</a></li>
          <li>Linkedin: <a href="#">@Pedro Barboza</a></li>
          <li>Instagram: <a href="#">@pedro.m.barboza</a></li>
          <li>My portfolio: comming soon...</li>
        </ul>
      </div>
    </footer>
  )
}