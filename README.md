# str_shorten
[![Build Status](https://travis-ci.org/binhqd/str_shorten.svg?branch=master)](https://travis-ci.org/binhqd/str_shorten)
[![bitHound Score](https://www.bithound.io/github/binhqd/str_shorten/badges/score.svg)](https://www.bithound.io/github/binhqd/str_shorten)
[![Coverage Status](https://coveralls.io/repos/binhqd/str_shorten/badge.svg?branch=master&time=2018.03)](https://coveralls.io/r/binhqd/str_shorten?branch=master)
[![bitHound Code](https://www.bithound.io/github/binhqd/str_shorten/badges/code.svg)](https://www.bithound.io/github/binhqd/str_shorten)
[![npm version](https://img.shields.io/npm/v/str_shorten.svg?style=flat-square)](https://www.npmjs.com/package/str_shorten)
[![Downloads](http://img.shields.io/npm/dm/str_shorten.svg)](https://www.npmjs.com/package/str_shorten)

Shorten string by character length with word boundary supported
## NPM
Install the module with:
```
npm install --save str_shorten
```

## Yarn
Install the module with:
```
yarn add str_shorten
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
### Basic
```javascript
var strShorten = require("str_shorten")
var str = "We will win if we want";
var shortenStr = strShorten(str, 11);
```
The return value will be "We will win..."
### Customize end symbols
```javascript
var strShorten = require("str_shorten")
var str = "We will win if we want";
var shortenStr = strShorten(str, 11, {endSymbols: ' -->'});
```
The return value will be "We will win -->"
### Without end symbols
```javascript
var strShorten = require("str_shorten")
var str = "We will win if we want";
var shortenStr = strShorten(str, 11, {endSymbols: ''});
```
The return value will be "We will win"

[See Demo](https://runkit.com/binhqd/runkit-str-shorten)

## License
Copyright (c) 2018 Binh Quan

Licensed under the MIT license.
