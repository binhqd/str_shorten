'use strict';

module.exports = function (str, maxChars, options) {
  var _optionsDefault = {
    wordBoundary: true,
    chars: [' ', '-'],
    endSymbols: '...'
  };
  var charRegx = /\s* \s*|\s*-\s*/;
  var words = str.split(charRegx);
  var retStr = '';

  options = Object.assign(_optionsDefault, options);

  function appendEndSymbols(strlen, maxChars, endSymbols) /* istanbul ignore next */{
    return strlen > maxChars ? endSymbols : '';
  }

  if (!maxChars || str.length <= maxChars) {
    return str;
  }

  if (!options.wordBoundary) {
    return str.substring(0, maxChars) + appendEndSymbols(str.length, maxChars, options.endSymbols);
  }

  for (var i = 0; i < words.length; i++) {
    if ((retStr + ' ' + words[i]).length > maxChars) {
      return str.substring(0, retStr.length) + appendEndSymbols(str.length, retStr.length, options.endSymbols);
    } else {
      retStr = i === 0 ? words[0] : retStr + (' ' + words[i]);
    }
  }
};