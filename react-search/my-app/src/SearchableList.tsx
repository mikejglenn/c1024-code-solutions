import { SearchBar } from './SearchBar';
import { Items } from './Items';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  return (
    <>
      {quotes.map((quote) => (
        <div>{quote}</div>
      ))}
      <SearchBar />
      <Items />
    </>
  );
}
