import { buildIndex, Document } from './map-index';

const fishDoc = { title: 'Fish', content: 'About fish.' };
const fishingDoc = { title: 'Fishing', content: 'Fish effectively.' };
const napsDoc = { title: 'Naps', content: 'Nap while fishing.' };
const dinnerDoc = { title: 'Dinner', content: 'Cook fish while grilling!' };

const docs: Document[] = [fishDoc, fishingDoc, napsDoc, dinnerDoc];

describe('buildIndex', () => {
  it('builds word index', () => {
    const index = buildIndex(docs);
    expect(index).toEqual(
      new Map([
        ['about', new Set([fishDoc])],
        ['fish', new Set([fishDoc, fishingDoc, dinnerDoc])],
        ['fishing', new Set([napsDoc])],
        ['effectively', new Set([fishingDoc])],
        ['nap', new Set([napsDoc])],
        ['while', new Set([napsDoc, dinnerDoc])],
        ['cook', new Set([dinnerDoc])],
        ['grilling', new Set([dinnerDoc])],
      ])
    );
  });

  it('builds one word index', () => {
    const doc = { title: '', content: 'Hello' };
    const index = buildIndex([doc]);
    expect(index).toEqual(new Map([['hello', new Set([doc])]]));
  });

  it('builds empty index for empty docs', () => {
    const index = buildIndex([]);
    expect(index).toEqual(new Map());
  });
});
