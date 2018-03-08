let assert = require('assert');
let str = 'We will win if we-want';
let str_shorten = require('../dist-modules');

describe('String', () => {
  describe('#str_shorten()', () => {

    it('should return \'We will win...\' if max chars is 11', () => {
      let out = str_shorten(str, 11);
      assert.equal(out, 'We will win...');
    });

    it('still return \'We will win...\' if max chars is 13', () => {
      let out = str_shorten(str, 13);
      assert.equal(out, 'We will win...');
    });

    it('should return \'We will win if we want\' if max chars is 130', () => {
      let out = str_shorten(str, 130);
      assert.equal(out, 'We will win if we-want');
    });

    it('should return \'We will win\' if max chars is 11 and empty endSymbols', () => {
      let out = str_shorten(str, 11, {endSymbols: ''});
      assert.equal(out, 'We will win');
    });
  });
});
