export function setPokemonTypeColor(type: string | undefined): string {
  if (!type) {
    return "#fff"
  }

  switch (type) {
    case "bug":
      return "#AFBF43"
    case "dark":
      return "#7E5E4F"
    case "dragon":
      return "#7F71E2"
    case "electric":
      return "#F8D148"
    case "fairy":
      return "#E49DDF"
    case "fighting":
      return "#B85149"
    case "fire":
      return "#E94D41"
    case "flying":
      return "#6897E9"
    case "ghost":
      return "#6F6AC0"
    case "grass":
      return "#7BC45B"
    case "ground":
      return "#CCB163"
    case "ice":
      return "#7DDDF9"
    case "normal":
      return "#ACAEA0"
    case "poison":
      return "#A45490"
    case "psychic":
      return "#F1589B"
    case "rock":
      return "#BBAC70"
    case "steel":
      return "#AFB0C5"
    case "water":
      return "#419CEF"
    default:
      return "#fff"
  }
}