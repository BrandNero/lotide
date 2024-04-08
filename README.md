# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @brandnero/lotide`

**Require it:**

`const _ = require('@brandnero/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `tail`: Finds the tail of an array.
- `countOnly`: When given an array. counts only if name is true.
- `eqArrays`: Tests if two arrays are the same.
- `eqObjects`:Tests if two objects are the same.
- `findKey`: Find the value of an object with a callback.
- `findKeyByValue`: Find the key of an object with callback of a value.
- `head`: Find the first element of an array.
- `letterPosition`: Given a string, finds the position of each letter.
- `map`: Given an array. it will return a new array based on the callback
- `middle`: Return the middle of the array. if even it will return two middle index.
- `tail`: Return the last element of an array
- `takeUntil`: Given an array. a callback function will return all elements until match
- `without`: Given an array and a exclude array. it will return a new array without the exclude elements

