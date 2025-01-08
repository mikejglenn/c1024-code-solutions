import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the smallest value in the BST, or `Infinity` if the tree is empty.
 */
export function smallest(bst: BinarySearchTree): number {
  return smallestRecursive(bst.root);
}

function smallestRecursive(node: TreeNode | undefined): number {
  if (!node) return Infinity;

  if (node.left === undefined) {
    return node.value;
  } else {
    return smallestRecursive(node.left);
  }

  // const left = smallestRecursive(node.left);
  // const right = smallestRecursive(node.right);
  // return Math.min(node?.value, left, right);
}
