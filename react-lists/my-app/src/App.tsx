import './App.css';
import { PokemonList } from './PokemonList';

export type Pokemon = {
  number: string;
  name: string;
};

const pokedex: Pokemon[] = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

function App() {
  return <PokemonList pokedex={pokedex} />;
}

export default App;
