module.exports = function(str, maxChars, options) {
  const _optionsDefault = {
    wordBoundary: true,
    chars: [' ', '-']
  };

  options = Object.assign(_optionsDefault, options);
  options.charRegx = /\s* \s*|\s*-\s*/;
  if (str.length <= maxChars) {
    return str;
  }

  if (!options.wordBoundary) {
    return str.substring(0, maxChars);
  }

  const words = str.split(options.charRegx);

  let retStr = '';
  for (let i = 0; i < words.length; i++) {
    // console.log(`'${retStr} ${words[i]}'`, ':', `${retStr} ${words[i]}`.length);
    if (`${retStr} ${words[i]}`.length > maxChars) {
      return str.substring(0, retStr.length);
    } else {
      if (i === 0) {
        retStr = words[0];
      } else {
        retStr += ` ${words[i]}`;
      }

    }
  }
};
