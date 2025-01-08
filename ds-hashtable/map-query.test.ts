import { DocumentIndex, buildIndex } from './map-index';
import { queryIndex } from './map-query';

const fishDoc = { title: 'Fish', content: 'About fish.' };
const fishingDoc = { title: 'Fishing', content: 'Fish effectively.' };
const napsDoc = { title: 'Naps', content: 'Nap while fishing.' };
const dinnerDoc = { title: 'Dinner', content: 'Cook fish while grilling!' };

const index: DocumentIndex = buildIndex([
  fishDoc,
  fishingDoc,
  napsDoc,
  dinnerDoc,
]);

describe('queryIndex', () => {
  it('finds "fish"', () => {
    const actual = queryIndex(index, 'fish');
    const expected = new Set([fishDoc, fishingDoc, dinnerDoc]);
    expect(actual).toEqual(expected);
  });

  it('finds "FISH"', () => {
    const actual = queryIndex(index, 'FISH');
    const expected = new Set([fishDoc, fishingDoc, dinnerDoc]);
    expect(actual).toEqual(expected);
  });

  it('finds "fish while"', () => {
    const actual = queryIndex(index, 'fish while');
    const expected = new Set([fishDoc, fishingDoc, napsDoc, dinnerDoc]);
    expect(actual).toEqual(expected);
  });

  it('finds nothing for "foo"', () => {
    const actual = queryIndex(index, 'foo');
    expect(actual).toEqual(new Set([]));
  });

  it('finds nothing for ""', () => {
    const actual = queryIndex(index, '');
    expect(actual).toEqual(new Set([]));
  });
});
