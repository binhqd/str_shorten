'use strict';

module.exports = function (str, maxChars, options) {
  var _optionsDefault = {
    wordBoundary: true,
    chars: [' ', '-'],
    endSymbols: '...'
  };

  var appendEndSymbols = function appendEndSymbols(strlen, maxChars, endSymbols) {
    return strlen > maxChars ? endSymbols : '';
  };

  options = Object.assign(_optionsDefault, options);
  options.charRegx = /\s* \s*|\s*-\s*/;
  if (str.length <= maxChars) {
    return str;
  }

  if (!options.wordBoundary) {
    return str.substring(0, maxChars) + appendEndSymbols(str.length, maxChars, options.endSymbols);
  }

  var words = str.split(options.charRegx);

  var retStr = '';
  for (var i = 0; i < words.length; i++) {
    if ((retStr + ' ' + words[i]).length > maxChars) {
      return str.substring(0, retStr.length) + appendEndSymbols(str.length, retStr.length, options.endSymbols);
    } else {
      if (i === 0) {
        retStr = words[0];
      } else {
        retStr += ' ' + words[i];
      }
    }
  }
};