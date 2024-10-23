interface Person {
  firstName: string;
  lastName: string;
}

function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

function greet(name: string): string {
  return 'Hey ' + name + '!';
}

const getArea = (width: number, height: number): number => {
  return width * height;
};

const getFirstName = (person: Person): string => {
  return person.firstName;
};

const getLastElement = (array: unknown[]): unknown => {
  return array[array.length - 1];
};

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

const greetResult: string = greet('Mike');
console.log('greetResult:', greetResult);

const getAreaResult: number = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

const getFirstNameResult: string = getFirstName({
  firstName: 'Mike',
  lastName: 'Glenn',
});
console.log('getFirstNameResult:', getFirstNameResult);

const getLastElementResult: unknown = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);

const callOtherFunctionResult: any = callOtherFunction(getLastElement, [
  'hello',
  'Goodbye',
  'Aloha',
]);
console.log('callOtherFunctionResult:', callOtherFunctionResult);
