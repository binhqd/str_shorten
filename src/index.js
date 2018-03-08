function appendEndSymbols(strlen, maxChars, endSymbols) {
  return strlen > maxChars ? endSymbols : '';
}

module.exports = (str, maxChars, options) => {
  const _optionsDefault = {
    wordBoundary: true,
    chars: [' ', '-'],
    endSymbols: '...'
  };
  const charRegx = /\s* \s*|\s*-\s*/;
  const words = str.split(charRegx);
  let retStr = '';

  options = Object.assign(_optionsDefault, options);

  if (!maxChars || str.length <= maxChars) {
    return str;
  }

  if (!options.wordBoundary) {
    return str.substring(0, maxChars) + appendEndSymbols(str.length, maxChars, options.endSymbols);
  }

  for (let i = 0; i < words.length; i++) {
    if (`${retStr} ${words[i]}`.length > maxChars) {
      return str.substring(0, retStr.length) + appendEndSymbols(str.length, retStr.length, options.endSymbols);
    } else {
      retStr = i === 0 ? words[0] : retStr + ` ${words[i]}`;
    }
  }
};
