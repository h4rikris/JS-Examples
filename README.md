# JS-Examples
Collections of JS examples

### Curry implementation using recursion
```js
const curry = (fn, ...args) => fn.length === args.length ?
  fn(...args) : (...remainingArgs) => curry(fn, ...args, ...remainingArgs);

const add = (a,b) => a + b;
console.log(curry(add, 1, 2))
console.log(curry(add, 1)(2))
console.log(curry(add)(1)(2))
```
