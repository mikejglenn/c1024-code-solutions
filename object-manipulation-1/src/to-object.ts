/* exported toObject */
function toObject(keyValuePair: [string, unknown]): object {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
