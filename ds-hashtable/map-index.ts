export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const index = new Map<string, Set<Document>>();

  docs.forEach((d) =>
    d.content.match(/\b(\w+)\b/g)?.forEach((word) => {
      const lcWord = word.toLocaleLowerCase();
      const docSet = index.get(lcWord);
      if (docSet) {
        index.set(lcWord, docSet.add(d));
      } else {
        index.set(lcWord, new Set([d]));
      }
    })
  );

  return index;
}
