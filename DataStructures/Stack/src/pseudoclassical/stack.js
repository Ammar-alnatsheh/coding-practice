var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.stackSize = 0;

};

Stack.prototype.push = function(value) {
  this.stackSize ++;
  this.storage[this.stackSize] = value;
};

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize --;
    return this.storage[this.stackSize + 1];
  }
};

Stack.prototype.size = function() {
  return this.stackSize;
};

var newStack = new Stack();
