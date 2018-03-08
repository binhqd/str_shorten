let assert = require('assert');
let str = 'We will win if we-want';
let strShorten = require('../dist-modules');

describe('String', () => {
  describe('#str_shorten()', () => {
    it('should return \'We will win...\' if max chars is 11', () => {
      let out = strShorten(str, 11);
      assert.equal(out, 'We will win...');
    });

    it('still return \'We will win...\' if max chars is 13', () => {
      let out = strShorten(str, 13);
      assert.equal(out, 'We will win...');
    });

    it('should return \'We will win if we want\' if max chars is 130', () => {
      let out = strShorten(str, 130);
      assert.equal(out, 'We will win if we-want');
    });

    it('should return \'We will win\' if max chars is 11 and empty endSymbols', () => {
      let out = strShorten(str, 11, {endSymbols: ''});
      assert.equal(out, 'We will win');
    });

    it('should return \'We will win i...\' if max chars is 11 and empty endSymbols', () => {
      let out = strShorten(str, 13, {wordBoundary: false});
      assert.equal(out, 'We will win i...');
    });
  });
});
