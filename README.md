## Why

I often find that I don't want my promises to settle **too fast**. In the case of making a network request and showing a spinner/loading indicator, if the request finishes too quickly, the spinner/loading UI indicator might flash and disappear. This module aims to settle (pun intended) that, without making use of Promise.settle provided by various Promise libraries.

## Why not `Promise.settle`?

`Promise.settle` settles with an array. I only ever want the value that my original promise fulfill's with or rejects with, just after a minimum timeout.

## Why not `Promise.delay`?
Various implementations of `Promise.delay` are inconsistent - they delay the resolve, but not the reject, or they only delay a full amount of time after a promise has resolved. `promise-minimum-delay` aims to simply require a promise to wait **at least** the specified delay before it resolves OR rejects. Easy.

## Usage

```js
import delayPromise from 'promise-minimum-delay';

let p = Promise.resolve(1); //or something else that returns a promise, like a network request

//make sure at least 1000ms have passed before we perform the callback
delayPromise(p,1000).then((r) => console.log(r));
```
