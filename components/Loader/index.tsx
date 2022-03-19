import style from './style.module.css'

type loaderProps = {
  loadingMessage: string
}

export function Loader(props: loaderProps) {
  return (
    <div className={style.loaderBox}>
      <div className={style.loader} />
      <span className={style.loadingMessage}>{props.loadingMessage}</span>
    </div>
  )
}