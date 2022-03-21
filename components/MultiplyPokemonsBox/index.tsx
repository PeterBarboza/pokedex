import { ReactNode } from 'react'
import style from './style.module.css'

type multiplyPokemonsBoxProps = {
  children: ReactNode
}

export function MultiplyPokemonsBox(props: multiplyPokemonsBoxProps) {
  return (
    <div className={style.MultiplyPokemonsBox}>
      {props.children}
    </div>
  )
}