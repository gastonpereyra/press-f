# Press F

![Build Status](https://github.com/gastonpereyra/press-f/workflows/Build%20Status/badge.svg)
[![Coverage Status](https://img.shields.io/coveralls/github/gastonpereyra/press-f/master.svg)](https://coveralls.io/r/gastonpereyra/press-f?branch=master)

![npmF](https://user-images.githubusercontent.com/39351850/90847511-113fe180-e341-11ea-9676-12964f43a55a.png)

## Description
When an Error happens, press "f" to pay respect. A funny replace to Error class.

## Installation

```
npm i press-f
```

## Usage

### new F(message)

Replace of `new Error('some message')`

```js
const F = require('press-f');

if(shouldNotHappen())
    throw new F('This should not happen because i don\'t like it');

/*
output: 
        throw new F(This should not happen because i don\'t like it');
        ^

Press F: This should not happen because i don't like it
    at ...
*/
```

### new F()

Replace of `new Error()`

```js
const F = require('press-f');

if(shouldNotHappen())
    throw new F();

/*
output: 
        throw new F();
        ^

Press F: Pay Respect
    at ...
*/
```

### new F(message, name)

Replace of `new Error(message)` but change Error name for a custom one, if `name` is *string*

```js
const F = require('press-f');

if(shouldNotHappen())
    throw new F('I don\'t care', 'This is not an Error');

/*
output: 
        throw new F();
        ^

This is not an Error: I don't care
    at ...
*/
```

