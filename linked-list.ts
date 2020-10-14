class Node {
  element: any;
  next: Node = null;

  constructor(element: any) {
    this.element = element;
  }
}

/**
 * A linked list data structure, where each node in the list contains a
 * reference to the node after it.
 */
class LinkedList {
  length: number = 0;
  head: Node = null;

  /** Add a new element to the end of the list. */
  add(element: any): void {
    if (this.head) {
      let currentNode: Node = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    } else {
      this.head = new Node(element);
    }
    this.length++;
  }

  /**
   * Remove the first occurrence of a given element from the list (if possible).
   */
  remove(element: any): void {
    if (this.head) {
      if (this.head.element === element) {
        this.head = this.head.next;
        this.length--;
      } else {
        // Search for element
        let currentNode: Node = this.head.next;
        let previousNode: Node = this.head;
        while (currentNode) {
          if (currentNode.element === element) {
            // Link adjacent nodes to each other
            previousNode.next = currentNode.next;
            this.length--;
            break;
          }
          currentNode = currentNode.next;
        }
      }
    }
  }

  /** Return the current number of elements in the list. */
  size(): number {
    return this.length;
  }

  /** Return whether or not the list is empty. */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /** Clear the contents of the list. */
  clear(): void {
    this.head = null;
    this.length = 0;
  }

  /**
   * Return the numerical index of the first occurrence of the given element in
   * the list (or `-1` if the list does not contain this element).
   */
  indexOf(element: any): number {
    let index: number = 0;
    let currentNode: Node = this.head;
    while (currentNode) {
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }

  /**
   * Return the element at the given index in the list (or `undefined` if the
   * list has no such index).
   */
  elementAt(index: number): any {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.element;
    }
  }

  /**
   * Remove and return the element at the given index from the list (or return
   * `null` if the list has no such index).
   */
  removeAt(index: number): any {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      const removed = this.head.element;
      this.head = this.head.next;
      this.length--;
      return removed;
    } else {
      // Find nodes at and around index
      let currentIndex = 1;
      let previousNode = this.head;
      let currentNode = this.head.next;
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      // Link adjacent nodes to each other
      previousNode.next = currentNode.next;

      this.length--;
      return currentNode.element;
    }
  }

  /**
   * Insert a given element at a given index in the list (or return `false` if
   * given an invalid index).
   */
  addAt(index: number, element: any): false | void {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      let newNode = new Node(element);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    } else {
      // Find nodes at and around index
      let currentIndex = 1;
      let currentNode = this.head.next;
      let previousNode = this.head;
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      // Add and link up
      let newNode = new Node(element);
      newNode.next = currentNode;
      previousNode.next = newNode;

      this.length++;
    }
  }
}