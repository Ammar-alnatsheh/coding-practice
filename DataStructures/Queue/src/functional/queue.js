var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    last ++;
    storage[last] = value;
  };

  someInstance.dequeue = function() {
    if ( (last - first) > 0 ) {
      first ++;
      delete storage[first-1];
      return storage[first];
    }

  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
