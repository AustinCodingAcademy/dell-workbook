# towers of hanoi

[view code](https://github.com/nntrn/dell-workbook/blob/gh-pages/13towers-of-hanoi-node/index.js)

## notes for tower of hanoi

The minimal number of moves required to solve a Tower of Hanoi puzzle is `2^n − 1`, where **n** is the number of disks.

4 disks will be a minimum of 15 moves

read more: [Tower of Hanoi recursion game algorithm explained](https://www.hackerearth.com/blog/algorithms/tower-hanoi-recursion-game-algorithm-explained/)


### get object names

The `Object.getOwnPropertyNames()` method returns an array of all properties

```js
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
```
how to call the arrays in the `stacks` object:
* `stacks.a`
* `stacks["a"]`

```js
const stackNames = Object.getOwnPropertyNames(stacks);
stackNames
// [ 'a', 'b', 'c' ]

stacks[stackNames[0]]
// [4, 3, 2, 1]
```

read more: [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)


### `push()` and `pop()`

* **pop**: extracts the last element of the array and returns it
* **push**: append the element to the end of the array

read more: [javascript.info/array](https://javascript.info/array)

#### why use `const` over `var`

`const` prevents the variable to be assigned to another value. We could say it makes the pointer immutable, but it doesn’t make the value immutable too

```
const arr = [1, 2, 3]
```

| const    |   |
:---------|-----------------------|----------|
| `const arr = [1, 2, 3]`  
| `arr.push('a')`      | *// const arr = [1, 2, 3, 'a']*
| `arr = [1, 2, 3]` | *// TypeError: Assignment to constant variable.*

 note: **numbers**, **booleans** and **strings** are always immutable

read more: 
* [Use `const` and make your JavaScript code better](https://medium.com/dailyjs/use-const-and-make-your-javascript-code-better-aac4f3786ca1)
* [What are mutable and immutable data structures?](https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2/)
  

