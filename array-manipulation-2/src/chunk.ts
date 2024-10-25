/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  if (size > array.length) {
    return [];
  }

  const chunkArr = [];
  const lastChunkSize = array.length % size;

  let i = 0;
  while (i < array.length - lastChunkSize) {
    const subChunk = [];
    for (let j = 0; j < size; j++) {
      subChunk.push(array[i + j]);
    }
    chunkArr.push(subChunk);
    i += size;
  }

  if (lastChunkSize > 0) {
    let k = i;
    const lastSubChunk = [];
    while (k < array.length) {
      lastSubChunk.push(array[k]);
      k++;
    }
    chunkArr.push(lastSubChunk);
  }
  return chunkArr;
}
