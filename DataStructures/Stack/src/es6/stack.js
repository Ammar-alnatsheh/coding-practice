class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stackSize = 0;
  }
  
  push(value) {
    this.stackSize ++;
    this.storage[this.stackSize] = value;
  }

  pop() {
    if (this.stackSize > 0) {
      this.stackSize --;
      return this.storage[this.stackSize + 1];
    }
  }

  size() {
    return this.stackSize;
  }

}


var newStack = new Stack();