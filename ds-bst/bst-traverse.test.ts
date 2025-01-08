import { traverse } from './bst-traverse';
import { BinarySearchTree } from './lib/bst';

describe('traverse', () => {
  it('returns items in sorted order', () => {
    const bst = new BinarySearchTree(18, 28, 1, -4, 0, 42);
    expect(traverse(bst)).toEqual([-4, 0, 1, 18, 28, 42]);
  });

  it('returns empty array for empty BST', () => {
    expect(traverse(new BinarySearchTree())).toEqual([]);
  });

  it('returns single item for one-item BST', () => {
    expect(traverse(new BinarySearchTree(-1))).toEqual([-1]);
  });
});
