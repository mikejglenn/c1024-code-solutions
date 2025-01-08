export class TreeNode {
  public left?: TreeNode = undefined;
  public right?: TreeNode = undefined;

  constructor(public value: number) {}
}

export class BinarySearchTree {
  public root?: TreeNode = undefined;

  public constructor(...values: number[]) {
    values?.forEach((v) => this.add(v));
  }

  public add(value: number): void {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = node;
            return;
          }
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            return;
          }
          currentNode = currentNode.left;
        } else {
          return;
        }
      }
    }
  }

  public remove(value: number): void {
    this.root = this.removeRecursive(this.root, value);
  }

  private removeRecursive(
    root: TreeNode | undefined,
    value: number
  ): TreeNode | undefined {
    if (!root) {
      return undefined;
    }

    if (root.value === value) {
      root = this.removeNode(root);
    } else if (value < root.value) {
      root.left = this.removeRecursive(root.left, value);
    } else {
      root.right = this.removeRecursive(root.right, value);
    }

    return root;
  }

  private removeNode(root: TreeNode): TreeNode | undefined {
    if (!root.left && !root.right) {
      return undefined;
    }
    if (root.left && root.right) {
      const successorNode = this.getSuccessor(root.left);
      const successorValue = successorNode.value;

      const r = this.removeRecursive(root, successorValue);
      if (r) root.value = successorValue;

      return root;
    }
    if (root.left) {
      return root.left;
    }
    return root.right;
  }

  private getSuccessor(node: TreeNode): TreeNode {
    let currentNode = node;

    while (currentNode) {
      if (!currentNode.right) {
        break;
      }

      currentNode = currentNode.right;
    }

    return currentNode;
  }

  public print(): string {
    return this.printRecursive(this.root);
  }

  private printRecursive(node: TreeNode | undefined): string {
    if (!node) return '';

    let label = String(node.value);
    if (node.left) {
      label += `, L: ${this.printRecursive(node.left)}`;
    }
    if (node.right) {
      label += `, R: ${this.printRecursive(node.right)}`;
    }
    return `{${label}}`;
  }
}
