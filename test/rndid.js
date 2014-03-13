
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

  it('should take a prefix', function () {
    var prefix = 'my-prefix';
    for (var i = 0; i < 5000; i++) {
      var id = rndid(prefix);
      assert(!document.getElementById(id));
      assert(prefix == id.substr(0, prefix.length));
    }
  });

  it('should take a prefix and a length', function () {
    var prefix = 'my-prefix';
    var len = 13;
    for (var i = 0; i < 5000; i++) {
      var id = rndid(prefix, 13);
      assert(!document.getElementById(id));
      assert(prefix == id.substr(0, prefix.length));
      assert(len + prefix.length == id.length);
    }
  });
});
