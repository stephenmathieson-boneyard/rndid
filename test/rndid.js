
describe('rndid', function () {
  var rndid = require('rndid');
  var assert = require('assert');

  it('should be a function', function () {
    assert('function' == typeof rndid);
  });

  it('should return a string', function () {
    assert('string' == typeof rndid());
  });

  it('should generate unique ids', function () {
    for (var i = 0; i < 5000; i++)
      assert(!document.getElementById(rndid()));
  });

  it('should take a length param', function () {
    for (var i = 1; i < 100; i++) {
      assert(i == rndid(i).length);
    }
  });
});
