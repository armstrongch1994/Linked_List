// YOUR CODE HERE

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(value) {
    let newNode = new Node(value);
    newNode.next = null;
    newNode.previous = this.tail;
    if (this.tail === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  addToHead = value => {
    let newNode = new Node(value);

    newNode.next = this.head;
    newNode.previous = null;
    if (this.head === null) {
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
    }
    this.head = newNode;
  };
  removeHead = () => {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.previous = null;
    else this.tail = null;

    return value;
  };
  removeTail = () => {
    if (!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return value;
  };
  search = value => {
    let currentHead = this.head;
    if (typeof value === 'function') {
      while (currentHead !== null) {
        let returnValue = value(currentHead.value);
        if (returnValue) {
          return currentHead.value;
        }
        currentHead = currentHead.next;
      }
    } else {
      while (currentHead !== null) {
        if (currentHead.value === value) {
          return currentHead.value;
        }
        currentHead = currentHead.next;
      }
    }
    return null;
  };
}
