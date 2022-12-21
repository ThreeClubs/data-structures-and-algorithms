// What is a node made up of?

// The value AND the pointer!

//A node is an object and so it has key/value pairs and could look like this:

const nodeExample = {
  value: 7, // node has value of 7
  next: {
    // pointer
    value: 4, // points to node with value of 4
    next: null, // which in turn points to null
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} // to avoid duplication of Node creation code in our LinkedList
// class, we create a Node creation class which we'll call in our
// LinkedList class below

class LinkedList {
  constructor(value) {
    // creates new Node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    //creates new Node --> adds Node to end
  }
  unshift(value) {
    //creates new Node --> adds Node to beginning
  }
  insert(index, value) {
    //creates new Node --> inserts Node somewhere in the list
  }
}

let myLinkedList = new LinkedList(4);

