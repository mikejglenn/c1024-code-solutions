import { testResultsProcessor } from '../../jest.config';

export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error('Invalid operator');
  }
}
