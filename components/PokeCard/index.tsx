import style from './style.module.css'

type pokeCardProps = {
  name: string;
  id: number;
  img: string;
  typeColor1: string;
  typeColor2: string;
  type1: string;
  type2?: string;
  status: {
    hp: number;
    atk: number;
    def: number;
    spAtk: number;
    spDef: number;
    speed: number;
  }
}

export function PokeCard({
  name, id, type1, type2, status, typeColor1, typeColor2, img
}: pokeCardProps) {
  return (
    <div className={style.pokeCard}>
      <img className={style.img} src={img} alt={name} />
      <div className={style.pokemonData}>
        <div className={style.pokemonIdAndName}>

        </div>
        <span className={style.pokemonId}>ID: {id}</span>
        <span className={style.pokemonName}>{name}</span>
        <div className={style.pokemonTypeBox}>
          <span className={style.pokemonType} style={{ backgroundColor: `${typeColor1}` }} >{type1}</span>
          <span className={style.pokemonType} style={{ backgroundColor: `${typeColor2}` }} >{type2}</span>
        </div>
        <div className={style.pokemonStatus}>
          <div className={style.status}>
            <span>HP</span>
            <div className={style.statusBar}>
              <div className={style.measure} style={{ width: `${status.hp}%` }} />
            </div>
          </div>
          <div className={style.status}>
            <span>ATK</span>
            <div className={style.statusBar}>
              <div className={style.measure} style={{ width: `${status.atk}%` }} />
            </div>
          </div>
          <div className={style.status}>
            <span>DEF</span>
            <div className={style.statusBar}>
              <div className={style.measure} style={{ width: `${status.def}%` }} />
            </div>
          </div>
          <div className={style.status}>
            <span>SP.ATK</span>
            <div className={style.statusBar}>
              <div className={style.measure} style={{ width: `${status.spAtk}%` }} />
            </div>
          </div>
          <div className={style.status}>
            <span>SP.DEF</span>
            <div className={style.statusBar}>
              <div className={style.measure} style={{ width: `${status.spDef}%` }} />
            </div>
          </div>
          <div className={style.status}>
            <span>SPEED</span>
            <div className={style.statusBar}>
              <div className={style.measure} style={{ width: `${status.speed}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}