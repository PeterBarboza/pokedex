import Image from 'next/image'

type logoProps = {
  img: StaticImageData
  text: string
}

import style from './style.module.css'

export function Logo(props: logoProps) {
  return (
    <div className={style.imgBox}>
      <Image className={style.img} layout="intrinsic" src={props.img} alt={props.text} />
    </div>
  )
}