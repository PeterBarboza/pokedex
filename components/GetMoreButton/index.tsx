import style from './style.module.css'

type getMoreButtonProps = {
  onClick: () => void
  isLoading: any[]
}

export function GetMoreButton(props: getMoreButtonProps) {
  return (
    <button className={style.getMoreBtn} onClick={() => props.onClick()} style={props.isLoading.length === 0 ? { visibility: "hidden" } : {}}>
      Buscar mais
    </button>
  )
}