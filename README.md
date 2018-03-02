# str_shorten
[![Build Status](https://travis-ci.org/binhqd/str_shorten.svg?branch=master)](https://travis-ci.org/binhqd/str_shorten)
[![Downloads](http://img.shields.io/npm/dm/str_shorten.svg)](https://www.npmjs.com/package/str_shorten)

Shorten string by character length with word boundary supported
## NPM
Install the module with:
```
npm install --save str_shorten
```

## Usage
```
str_shorten(string, maxChars, options) 
```

### Options

| name         | default | required | type   | description                                                                                                                |
|--------------|----------|--------|----------|-----------------------------------------------------------------------------------------------------------------|
| wordBoundary | true | false     | boolean  | Indicate whether using word boundary or not. |
| endSymbols | '...' | false     | string  | Symbols indicate there is more text. |

## Example
```javascript
var strShorten = require("str_shorten")
var str = "We will win if we want";
var shortenStr = strShorten(str, 11);
```

The return value will be "We will win"

[See Demo](https://runkit.com/binhqd/runkit-npm-str-shorten)

## License
Copyright (c) 2018 Binh Quan

Licensed under the MIT license.
