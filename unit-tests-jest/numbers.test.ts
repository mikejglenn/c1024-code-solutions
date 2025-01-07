import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns number formatted in dollars and cents', () => {
    const cents = 2523;
    const result = toDollars(cents);
    expect(result).toEqual('$25.23');
  });
});

describe('divideBy', () => {
  it('returns new array of numbers divided by divisor', () => {
    const numbers = [2, 4, 10, 20, 0];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 2, 5, 10, 0]);
  });
});

describe('multiplyBy', () => {
  it(`returns modified object multiplying the value of each key only if that
    value is a number`, () => {
    const obj = { one: 1, two: 'two', three: '3' };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({ one: 2 });
  });
});
