// What is a node made up of?

// The value AND the pointer!

//A node is an object and so it has key/value pairs and could look like this:

const Node = {
    value: 7, // node has value of 7
    next: { // pointer
        value: 4, // points to node with value of 4
        next: null // which in turn points to null 
    }
}

