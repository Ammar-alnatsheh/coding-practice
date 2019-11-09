var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.stackSize = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stackSize ++;
  this.storage[this.stackSize] = value;
};

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize --;
    return this.storage[this.stackSize + 1];
  }
};

stackMethods.size = function() {
  return this.stackSize;
};
