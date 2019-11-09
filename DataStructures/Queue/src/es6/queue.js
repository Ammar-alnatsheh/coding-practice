class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this.last ++;
    this.storage[this.last] = value;
  }

  dequeue() {
    if ( (this.last - this.first) > 0 ) {
      this.first ++;
      delete this.storage[this.first-1];
      return this.storage[this.first];
    }
  }

  size() {
    return this.last - this.first;
  }


}


var newQueue = new Queue();
