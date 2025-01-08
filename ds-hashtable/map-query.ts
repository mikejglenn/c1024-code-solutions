import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const docs = new Set<Document>();

  query.match(/\b(\w+)\b/g)?.forEach((word) => {
    const lcWord = word.toLocaleLowerCase();
    const docSet = index.get(lcWord);
    if (docSet) {
      docSet.forEach((d) => {
        docs.add(d);
      });
    }
  });
  return docs;
}
