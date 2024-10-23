'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
function greet(name) {
  return 'Hey ' + name + '!';
}
const getArea = (width, height) => {
  return width * height;
};
const getFirstName = (person) => {
  return person.firstName;
};
const getLastElement = (array) => {
  return array[array.length - 1];
};
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
const greetResult = greet('Mike');
console.log('greetResult:', greetResult);
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);
const getFirstNameResult = getFirstName({
  firstName: 'Mike',
  lastName: 'Glenn',
});
console.log('getFirstNameResult:', getFirstNameResult);
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);
const callOtherFunctionResult = callOtherFunction(getLastElement, [
  'hello',
  'Goodbye',
  'Aloha',
]);
console.log('callOtherFunctionResult:', callOtherFunctionResult);
