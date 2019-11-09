window.variant = document.location.search.slice(1);

define([
  'spec/verifyClass.js',
  '../lib/chai/chai.js',
  '../lib/mocha/mocha.js',
  'src/' + variant + '/queue.js',
  '../lib/jquery/jquery.js'
], function(verifyClass, chai) {

  $(function() {
    $('<h4>The ' + variant + ' pattern</h4>').css({margin: 0}).prependTo(document.body);
  });

  mocha.setup('bdd');
  var expect = chai.expect;

  describe('queue', function() {
    var queue;
    var instantiator = variant === 'pseudoclassical' ? Queue : Queue;
    var prototypeOfInstances = variant === 'prototypal' && queueMethods;

    beforeEach(function() {
      if (variant === 'pseudoclassical' || variant === 'es6') {
        queue = new instantiator();
      } else {
        queue = instantiator();
      }
    });

    describe('queue shared behavior', function() {

      verifyClass(instantiator).followsPattern(variant, {}, prototypeOfInstances);

      it('reports a size of zero for a new queue', function() {
        expect(queue.size()).to.equal(0);
      });

      it('reports a size of 2 after adding two items', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.size()).to.equal(2);
      });

      it('does not error when removing from an empty queue', function() {
        expect(function() { queue.dequeue(); }).not.throws();
      });

      it('reports a size of 1 after adding two items and removing one', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.dequeue();
        expect(queue.size()).to.equal(1);
      });

      it('reports a size of 0 after removing more items than were added', function() {
        queue.enqueue('a');
        queue.dequeue();
        queue.dequeue();
        expect(queue.size()).to.equal(0);
      });

      it('allows sequentially adding and removing items', function() {
        queue.enqueue('a');
        expect(queue.dequeue()).to.equal('a');
        queue.enqueue('b');
        expect(queue.dequeue()).to.equal('b');
      });

    });

    describe('queue-specific behavior', function() {
      it('removes the least recently added of two items', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.dequeue()).to.equal('a');
      });

      it('removes the oldest item, after newer items have already been added and removed', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.dequeue();
        queue.enqueue('c');
        expect(queue.dequeue()).to.equal('b');
      });
    });

  });


  window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
});
