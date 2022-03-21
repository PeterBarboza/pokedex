interface IPokemonStats {
  base_stat: number
  stat: {
    name: "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed"
  }
}
interface IPokemonTypes {
  type: {
    name: string
  }
}

export interface IFirstReqData {
  results: Promise<IFirstPokemonData[]>,
  next: string
}

export interface IFirstPokemonData {
  name: string;
  url: string;
}

export interface IFinalPokemonRawData {
  name: string;
  id: number;
  sprites: {
    front_default: string
  }
  stats: IPokemonStats[]
  types: IPokemonTypes[]
}

export interface IFinalPokemonData {
  name: string;
  id: number;
  img: string;
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