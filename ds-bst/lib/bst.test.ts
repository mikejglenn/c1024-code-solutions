import { BinarySearchTree } from './bst';

describe('new BinarySearchTree', () => {
  it('add creates a BST', () => {
    const bst = new BinarySearchTree();

    bst.add(20);
    expect(bst.print()).toEqual('{20}');
    bst.add(25);
    expect(bst.print()).toEqual('{20, R: {25}}');
    bst.add(15);
    expect(bst.print()).toEqual('{20, L: {15}, R: {25}}');
    bst.add(18);
    expect(bst.print()).toEqual('{20, L: {15, R: {18}}, R: {25}}');
    bst.add(14);
    expect(bst.print()).toEqual('{20, L: {15, L: {14}, R: {18}}, R: {25}}');
  });

  it('ignores duplicates', () => {
    const bst = new BinarySearchTree(20, 25, 20);
    expect(bst.print()).toEqual('{20, R: {25}}');
  });

  it('remove removes a node', () => {
    const bst = new BinarySearchTree(20, 25, 15, 18, 14);

    bst.remove(18);
    expect(bst.print()).toEqual('{20, L: {15, L: {14}}, R: {25}}');
    bst.remove(20);
    expect(bst.print()).toEqual('{15, L: {14}, R: {25}}');
  });
});
