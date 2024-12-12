/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { PokemonList, Pokemon } from './PokemonList';

export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  const mew = { number: '151', name: 'Mewtwo' };

  function addItem(arr: Pokemon[], item: Pokemon): Pokemon[] {
    return [...arr, item];
  }

  function updateItem(arr: Pokemon[], item: Pokemon): Pokemon[] {
    return arr.map((i) => (i.number === item.number ? item : i));
  }

  function removeItem(arr: Pokemon[], item: Pokemon): Pokemon[] {
    return arr.filter((i) => i.number !== item.number);
  }

  function handleAdd(): void {
    setPokedex(addItem(pokedex, mew));
  }

  function handleUpdate(): void {
    setPokedex(updateItem(pokedex, { number: '151', name: 'Mew' }));
  }

  function handleRemove(): void {
    setPokedex(removeItem(pokedex, mew));
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
