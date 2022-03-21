import { Logo } from '../Logo'

import logoPng from '../../public/pokemon-logo.png'
import style from './style.module.css'

//TODO: Colocar links das redes
export function Footer() {
  return (
    <footer className={style.footer}>
      <Logo img={logoPng} text="Pokémon" />
      <div className={style.footerNotes}>
        <h2>Pokédex by Pedro Barboza</h2>
        <h3>Follow on the social medias</h3>
        <ul className={style.contactList}>
          <li>Github: <a href="https://github.com/PeterBarboza" target="_blank" rel="noreferrer">@PeterBarboza</a></li>
          <li>Linkedin: <a href="https://www.linkedin.com/in/pedro-barboza-webdev/" target="_blank" rel="noreferrer">@Pedro Barboza</a></li>
          <li>Instagram: <a href="https://www.instagram.com/pedro.m.barboza/" target="_blank" rel="noreferrer">@pedro.m.barboza</a></li>
          <li>My portfolio: comming soon...</li>
        </ul>
      </div>
    </footer>
  )
}