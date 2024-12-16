import { SearchBar } from './SearchBar';
import { Items } from './Items';
import { useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div style={{ height: '25rem' }}>
      <SearchBar onSearchChange={setSearchInput} />
      <Items
        filteredItems={quotes.filter((quote) =>
          quote.toLowerCase().includes(searchInput.toLowerCase())
        )}
      />
    </div>
  );
}
