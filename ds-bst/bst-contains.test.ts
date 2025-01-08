import { contains } from './bst-contains';
import { BinarySearchTree } from './lib/bst';

describe('contains', () => {
  it('finds a number', () => {
    const bst = new BinarySearchTree(18, 28, 1, -4, 0, 42);
    expect(contains(bst, 18)).toBeTruthy();
  });

  it('finds a negative number', () => {
    const bst = new BinarySearchTree(18, 28, 1, -4, 0, 42);
    expect(contains(bst, -4)).toBeTruthy();
  });

  it('finds 0', () => {
    const bst = new BinarySearchTree(18, 28, 1, -4, 0, 42);
    expect(contains(bst, 0)).toBeTruthy();
  });

  it('does not find missing number', () => {
    const bst = new BinarySearchTree(18, 28, 1, -4, 0, 42);
    expect(contains(bst, 10)).toBeFalsy();
  });

  it('returns false for empty BST', () => {
    expect(contains(new BinarySearchTree(), 18)).toBeFalsy();
  });

  it('returns true for one-item BST', () => {
    expect(contains(new BinarySearchTree(-1), -1)).toBeTruthy();
  });
});
