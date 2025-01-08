import { smallest } from './bst-smallest';
import { BinarySearchTree } from './lib/bst';

describe('smallest', () => {
  it('finds smallest number', () => {
    const bst = new BinarySearchTree(18, 28, 1, -4, 0, 42);
    expect(smallest(bst)).toEqual(-4);
  });

  it('finds 0', () => {
    const bst = new BinarySearchTree(0, 42);
    expect(smallest(bst)).toEqual(0);
  });

  it('returns Infinity for empty BST', () => {
    expect(smallest(new BinarySearchTree())).toEqual(Infinity);
  });

  it('returns item for one-item BST', () => {
    expect(smallest(new BinarySearchTree(42))).toEqual(42);
  });
});
