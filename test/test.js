var assert = require('assert');
var str = 'We will win if we-want';
var str_shorten = require('../index.js');

describe('String', function() {
  describe('#str_shorten()', function() {

    it('should return \'We will win\' if max chars is 11', function() {
      var out = str_shorten(str, 11);
      assert.equal(out, 'We will win');
    });

    it('still return \'We will win\' if max chars is 13', function() {
      var out = str_shorten(str, 13);
      assert.equal(out, 'We will win');
    });

    it('should return \'We will win if we want\' if max chars is 130', function() {
      var out = str_shorten(str, 130);
      assert.equal(out, 'We will win if we-want');
    });
  });
});
