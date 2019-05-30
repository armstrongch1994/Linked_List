class Node {
  constructor(value) {
    this.next = null
    this.previous = null
    this.value = value
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  addToTail(string) {
    let newNode = new Node(string)
    newNode.next = null
    newNode.previous = this.tail
    if (!this.tail) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
  }
  addToHead = string => {
    let newNode = new Node(string)
    newNode.next = this.head
    newNode.previous = null
    if (!this.head) {
      this.tail = newNode
    } else {
      // there was a prior head
      this.head.previous = newNode
    }
    this.head = newNode
  }
  removeHead() {
    if (!this.head) return null
    let value = this.head.value
    this.head = this.head.next
    if (this.head) {
      this.head.previous = null
    } else {
      this.tail = null
    }
    return value
  }
  removeTail() {
    if (!this.tail) return null
    let value = this.tail.value
    this.tail = this.tail.previous
    if (this.tail) {
      this.tail.next = null
    } else {
      this.head = null
    }
    return value
  }
  search = value => {
    let currentHead = this.head
    if (typeof value === 'function') {
      while (currentHead !== null) {
        let returnValue = value(currentHead.value)
        if (returnValue) {
          return currentHead.value
        }
        currentHead = currentHead.next
      }
    } else {
      while (currentHead !== null) {
        if (currentHead.value === value) {
          return currentHead.value
        }
        currentHead = currentHead.next
      }
    }
    return null
  }
}

//let linkedList = new linkedList()
//linkedList.head === null
//linkedLink.addToTail("first")
