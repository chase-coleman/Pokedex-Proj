
const getRandomPokemonIndexes = (min, max) => {
  return Array.from({length : 10}, () => Math.floor(Math.random() * (max-min + 1)) + min)
}

export default getRandomPokemonIndexes