// Classes

class Cookie {
  constructor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green");

console.log(cookieOne);

class Person {
  constructor(name, age, sex, gender, favColor) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.gender = gender;
    this.favColor = favColor;
  }
  getName() {
    return this.name;
  }
  setFavColor(color) {
    this.color = color;
  }
}

let me = new Person("Andrew", "37", "Male", "Man", "Teal");

console.log(me);
console.log(me.getName());
me.setFavColor("Brown");
console.log(me.color);

class LinkedList {
  // an example of a bare bones linked list class structure
  constructor(value) {
    // code goes here
  }
  push(value) {
    // code goes here
  }
  unshift(value) {
    // code goes here
  }
  insert(index, value) {
    // code goes here
  }
  remove(index) {
    // code goes here
  }
  pop() {
    // code goes here
  }
  shift() {
    // code goes here
  }
}

let myLinkedList = new LinkedList(23);
myLinkedList.push(7); // etc NOTE these wont work yet

// this will be covered in greater detail later in the section
// on LinkedLists

// Pointers

// Here is an example of something that DOESN'T use pointer

let num1 = 5;
let num2 = num1;

num1 = 10;
console.log(num2); // this outputs 5 because all we did was allocate num1 value
// to another point in memory and so we haven't changed the new memory point by changing the
// first one

// Now here is an object that does use pointers

let obj1 = {
  value: 11,
};
let obj2 = obj1; // what we're saying here is that obj2 points to the same memmory which contains obj1

obj1.value = 10; // so NOW when we change obj
console.log(obj2); // it outputs value: 10

let obj3 = {
  value: 57,
};

obj2 = obj3; // we can move the pointer somewhere else
console.log(obj2); // will output value: 57

obj1 = obj2; // now all three objects point to the same value stored
// at the same point in memory and so...
console.log(obj1); // --> value: 57

// Note: JavaScript periodically cleans up the objects that are no longer accessible
// such as the {value: 22} etc... through a process called Garbarge Collection
