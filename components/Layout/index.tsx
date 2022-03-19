import { ReactNode } from "react"
import style from './style.module.css'

type layoutProps = {
  children: ReactNode
}

export function Layout(props: layoutProps) {
  return (
    <div className={style.layout}>
      {props.children}
    </div>
  )
}