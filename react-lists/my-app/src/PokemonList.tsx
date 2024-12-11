type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const listPokemon = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listPokemon}</ul>;
}
