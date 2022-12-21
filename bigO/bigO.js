//  Big O Notation

// Time complexity isn't measured in time --> it's measured in
//  number of operations

// Space complexity is the amount of memory a bit of code uses

// Big O, or Omicron, measures worst case.

// Ω Omega is best case and θ Theta is average case.

//  O (n) is linear complexity

function logItems(n) {
  // we pass this function a number and it runs n times
  for (let i = 0; i < n; i++) {
    // the number of operations is proportional to the input
    console.log(i); // therefore it is linear (Time)
  }
}

logItems(10);

// Drop/remove constants

function logItemsTwice(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    // two indentical for loops both O(n) Time = 2n right?
    console.log(j); // However, as a rule, simplify this to just O(n) by dividing by constant --> 2n/2 = n
  }
}

logItemsTwice(3);

// O(n^2)

function logItemsSquared(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // for loop nested inside a for loop = n * n = n^2
      console.log(i, j);
    }
  }
}

logItemsSquared(2); // input 2 --> output 4 items
logItemsSquared(5); // input 5 --> output 25 items

function logItemsCubed(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        // add another loop loop = n*n*n = O(n^3)?
        // However, as a rule, we simplify this to just O(n^2) !!
        console.log(i, j, k);
      }
    }
  }
}

logItemsCubed(3); // input 3 ---> output 3*3*3 = 3^3 = 27 | O(n^2)

// Drop non-dominants

function logItemsSquaredThenOnce(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // n * n = n^2 // this is our dominant complexity
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    // O(n) or linear // this is our non-dominant complexity
    console.log(k);
  }
  // does this mean we have n^2 + n?
  // No! We drop the non-dominant term entirely and we are left with n^2
}

// O(1) or constant time

const addItems = (n) => console.log(n + n);
addItems(10); // input 10 --> output 20

//  the number of operations remains constant no matter the input

// O (log(n))

//log_b(n) = y WHERE y^(number of operations) = n
//log_2(8) = y WHERE 2^y = 8 --> 2^3 = 8
//log_2(2) = y WHERE 2^y = 2 --> 2^1 = 2

// 8 items:  1 2 3 4 5 6 7 8
// 1st operation --> cut in half  1 2 3 4
//2nd operation --> cut in half 1 2
// 3rd operation --> cut in half and left with 1 (this is also called divide and conquer)
// This algoritm would be O(log(n))

// n log(n) for SOME sorting algorithms this is the most efficient worst case,
// particularly those that don't just contain numbers
// --> This will be covered in more detailed when we revisit sorting algorithms

// Comon coding interview "Gotchas"

function logDistinctItems(a, b) {
  for (let i = 0; i < a; i++) {
    // we see two for loops and we intuitively think --> O(n) !! BUT
    console.log(i); // We can't simplify this way because we can't know if a = b
  } // So we simplify it as O(a) + O(b) ---> O(a+b)
  for (let j = 0; j < b; j++) {
    console.log(j);
  }
}

function logDistinctItemsSquared(a, b) {
  // in the same vein
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      // for loop nested inside a for loop = O(a*b) =/= n^2
      console.log(i, j);
    }
  }
}

// Big O: Arrays

const myArray = [11, 3, 23, 7];

myArray.push(17); // indexes don't have to be reassigned, just one added to the end
myArray.pop(); // and conversely just one removed ( the last one)

// these array methods have a time complexity of O(1) or constant time

myArray.shift(); // removes zeroeth item of array and reassigns all prev indices - 1
myArray.unshift(11); // adds item to zeroeth index of array and ressasigns all prev indices + 1

// these array methods havea a time complexity of O(n) or linear time

myArray.splice(1, 0, "Hi");
// we're going to put something in at index 1
// we're not going to remove any items
// our item will be the string "hi"

// when we do this we reindex everything to the right of our item

myArray.splice(1, 1); //likewise, when we remove something, everything to the right of index 1 must be reindexed

// in the worse case we would have one operation for every item or close to it for both
// ---> The time complexity for both is O(n) or linear time

// searching an array for a value is O(n) or linear time at worst
// retrieving a value from a specific index is always O(1) or constant time

//Takeaway here is that Arrays are great when we're accessing by index but not so great if we're
// doing a lot of adding and removing items from the beginning or the middle of the array

// O(n^2) --> loop within a loop
// O(n) --> proportional
// O(log n) --> divide and conquer
// O(1) --> constant
