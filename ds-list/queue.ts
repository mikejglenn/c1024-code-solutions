export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    if (this.nodes.length === 0) {
      this.nodes.push({ data: item, priority });
    } else {
      const lowerPriorityIndex = this.nodes.findIndex(
        (element) => element.priority <= priority
      );
      if (lowerPriorityIndex === -1) {
        this.nodes.push({ data: item, priority });
      } else {
        this.nodes.splice(lowerPriorityIndex, 0, { data: item, priority });
      }
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length === 0) return undefined;

    const firstElem = this.nodes.shift();
    return firstElem?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) return undefined;

    return this.nodes[0].data;
  }
}
