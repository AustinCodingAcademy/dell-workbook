# JAVASCRIPTING

1. [INTRODUCTION (Exercise 1 of 19)](#introduction-exercise-1-of-19)
2. [VARIABLES (Exercise 2 of 19)](#variables-exercise-2-of-19)
3. [STRINGS (Exercise 3 of 19)](#strings-exercise-3-of-19)
4. [STRING LENGTH (Exercise 4 of 19)](#string-length-exercise-4-of-19)
5. [REVISING STRINGS (Exercise 5 of 19)](#revising-strings-exercise-5-of-19)
6. [NUMBERS (Exercise 6 of 19)](#numbers-exercise-6-of-19)
7. [ROUNDING NUMBERS (Exercise 7 of 19)](#rounding-numbers-exercise-7-of-19)
8. [NUMBER TO STRING (Exercise 8 of 19)](#number-to-string-exercise-8-of-19)
9. [IF STATEMENT (Exercise 9 of 19)](#if-statement-exercise-9-of-19)
10. [FOR LOOP (Exercise 10 of 19)](#for-loop-exercise-10-of-19)
11. [ARRAYS (Exercise 11 of 19)](#arrays-exercise-11-of-19)
12. [ARRAY FILTERING (Exercise 12 of 19)](#array-filtering-exercise-12-of-19)
13. [ACCESSING ARRAY VALUES (Exercise 13 of 19)](#accessing-array-values-exercise-13-of-19)
14. [LOOPING THROUGH ARRAYS (Exercise 14 of 19)](#looping-through-arrays-exercise-14-of-19)
15. [OBJECTS (Exercise 15 of 19)](#objects-exercise-15-of-19)
16. [OBJECT PROPERTIES (Exercise 16 of 19)](#object-properties-exercise-16-of-19)
17. [FUNCTIONS (Exercise 17 of 19)](#functions-exercise-17-of-19)
18. [FUNCTION ARGUMENTS (Exercise 18 of 19)](#function-arguments-exercise-18-of-19)
19. [SCOPE (Exercise 19 of 19)](#scope-exercise-19-of-19)

npx javascripting verify 07javascripting/


## INTRODUCTION (Exercise 1 of 19)

Anything between the parentheses of `console.log()` are printed to the terminal.

    console.log('hello');

prints hello to the terminal.

Currently we are printing a string of characters to the terminal: hello.

## VARIABLES (Exercise 2 of 19)

A variable is a name that can reference a specific value. Variables are declared using `var` followed by the variable's name.

Here's an example:

     var example;

The above variable is declared, but it isn't defined (it does not yet reference a specific value).

Here's an example of defining a variable, making it reference a specific value:

     var example = 'some string';

**note**: A variable is declared using var and uses the equals sign to define the value that it references. This is colloquially known as "Making a variable equal a value".

The challenge:

> Create a file named `variables.js`.
> In that file declare a variable named **example**.
> Make the variable **example** equal to the value `'some string'`.

Then use `console.log()` to print the example variable to the console.

## STRINGS (Exercise 3 of 19)

A **string** is a sequence of characters. A character is, roughly speaking, a written symbol. Examples of characters are letters, numbers, punctuation marks, and spaces.

String values are surrounded by either single or double quotation marks.

     'this is a string'

     "this is also a string"

**note**: Try to stay consistent. In this workshop we'll only use ==single quotation marks.==

The challenge:

> For this challenge, create a file named `strings.js`.
> In that file create a variable named **someString** like this:

     `var someString = 'this is a string';`

Use `console.log()` to print the variable someString to the terminal.

## STRING LENGTH (Exercise 4 of 19)

You will often need to know how many characters are in a string.

For this you will use the `.length` property. Here's an example:

     var example = 'example string';
     example.length

**note**: Make sure there is a period between example and length.

The above code will return a number for the total **number of characters** in the string.

The challenge:

> Create a file named `string-length.js`.
> In that file, create a variable named **example**.
> Assign the string `'example string'` to the variable **example**.

Use `console.log` to print the **length** of the string to the terminal.

## REVISING STRINGS (Exercise 5 of 19)

You will often need to change the contents of a string.

Strings have built-in functionality that allow you to inspect and manipulate their contents.

Here is an example using the `.replace()` method:

     var example = 'this example exists';
     example = example.replace('exists', 'is awesome');
     console.log(example);

Note that to change the value that the example variable references, we need to use the equals sign again, this time with the `example.replace()` method to the right of the equals sign.

The challenge:

> Create a file named `revising-strings.js`.
> Define a variable named **pizza** that references this string: `'pizza is alright'`
> Use the `.replace()` method to change alright to **wonderful**.

Use `console.log()` to print the results of the .replace() method to the terminal.

## NUMBERS (Exercise 6 of 19)

Numbers can be integers, like 2, 14, or 4353, or they can be decimals, also known as floats, like 3.14, 1.5, or 100.7893423. Unlike Strings, Numbers do not need to have quotes.

The challenge:

> Create a file named `numbers.js`.
> In that file define a variable named **example** that references the integer
> **123456789**.

Use `console.log()` to print that number to the terminal.

## ROUNDING NUMBERS (Exercise 7 of 19)

We can do basic math using familiar operators like `+`, `-`, `*`, `/`, and `%`.

For more complex math, we can use the `Math` object.
In this challenge we'll use the Math object to round numbers.

The challenge:

> Create a file named `rounding-numbers.js`.
>
> In that file define a variable named **roundUp** that references the `float 1.5`.
We will use the `Math.round()` method to round the number up. This method rounds either up or down to the nearest integer.
>
> An example of using Math.round():
`Math.round(0.5);`
>
> Define a second variable named **rounded** that references the ==output== of the `Math.round()` method, passing in the **roundUp** variable as the argument.

Use `console.log()` to print that number to the terminal.

## NUMBER TO STRING (Exercise 8 of 19)

Sometimes you will need to turn a number into a string.
In those instances you will use the `.toString()` method. Here's an example:

     var n = 256;
     n = n.toString();

The challenge:

> Create a file named `number-to-string.js`.
In that file define a variable named **n** that references the number `128`;
Call the `.toString()` method on the **n** variable.

Use `console.log()` to print the results of the `.toString()` method to the terminal.

## IF STATEMENT (Exercise 9 of 19)

  Conditional statements are used to alter the control flow of a program, based on a specified **boolean** condition.

  A conditional statement looks like this:

     if (n > 1) {
       console.log('the variable n is greater than 1.');
     } else {
       console.log('the variable n is less than or equal to 1.');
     }

  Inside parentheses you must enter a logic statement, meaning that the result of the statement is either **true** or **false**.

  The `else` block is optional and contains the code that will be executed if the statement is false.
  
  The challenge:

  > Create a file named `if-statement.js`.
  In that file, declare a variable named **fruit**.
  Make the **fruit** variable reference the value `orange` with the type of **String**.

  Then Use `console.log()` to print **"The fruit name has more than five characters."** if the length of the value of fruit is greater than five. Otherwise, print **"The fruit name has five characters or less."**


## FOR LOOP (Exercise 10 of 19)

  For loops allow you to repeatedly run a block of code a certain number of times. This for loop logs to the console ten times:

     for (var i = 0; i < 10; i++) {
       // log the numbers 0 through 9
       console.log(i)
     }

  The first part, `var i = 0`, is run once at the beginning of the loop. The variable `i` is used to track how many times the loop has run.
  
  The second part, `i < 10`, is checked at the beginning of every loop iteration before running the code inside the loop. 
  * If the statement is true, the code inside the loop is executed. 
  * If it is false, then the loop is complete. 
  * The statement `i < 10`; indicates that the loop will continue as long as `i` is less than 10.
  
  The final part, `i++`, is executed at the end of every loop. This increases the variable `i` by 1 after each loop. Once `i` reaches 10, the loop will exit.


 The challenge:

  > Create a file named `for-loop.js`.
  >
  > In that file define a variable named **total** and make it equal the number **0**.
  >
  > Define a second variable named **limit** and make it equal the number **10**.
  >
  > Create a `for` loop with a variable `i` starting at **0** and increasing by **1** each time through the loop. The loop should run as long as `i` is less than **limit**.
  >
  > On each iteration of the loop, add the number `i` to the **total** variable. To do this, you can use this statement: `total += i;`

  After the for loop, use `console.log()` to print the total variable to the terminal.


## ARRAYS (Exercise 11 of 19)

  An array is a list of values. Here's an example:

     var pets = ['cat', 'dog', 'rat'];
     
   The challenge:
   
   > Create a file named `arrays.js`.
   In that file define a variable named **pizzaToppings** that references an array that contains three strings in this order: `tomato sauce`, `cheese`, `pepperoni`.

  Use `console.log()` to print the **pizzaToppings** array to the terminal.

## ARRAY FILTERING (Exercise 12 of 19)

  There are many ways to manipulate arrays.

  One common task is filtering arrays to only contain certain values.

  For this we can use the `.filter()` method.

  Here is an example:

     var pets = ['cat', 'dog', 'elephant'];

     var filtered = pets.filter(function (pet) {
       return (pet !== 'elephant');
     });

  The filtered variable will now only contain cat and dog.
  
  The challenge:

  > Create a file named `array-filtering.js`.
  In that file, define a variable named **numbers** that references this array: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`
  >
  > Like above, define a variable named **filtered** that references the result of `numbers.filter()`.

  The function that you pass to the `.filter()` method will look something like this:

     function evenNumbers (number) {
       return number % 2 === 0;
     }

  Use console.log() to print the filtered array to the terminal.

## ACCESSING ARRAY VALUES (Exercise 13 of 19)

  Array elements can be accessed through index number.

  Index number starts from **zero** to array's property length minus one.

  Here is an example:

     var pets = ['cat', 'dog', 'rat'];

     console.log(pets[0]);

  The above code will print the first element of pets array - string cat.

  Array elements must be accessed through only using bracket notation.

  Dot notation is invalid.

  Valid notation:

     console.log(pets[0]);

  Invalid notation:

     console.log(pets.1);

 The challenge:

  > Create a file named `accessing-array-values.js`.
  In that file, define array food : `var food = ['apple', 'pizza', 'pear'];`
  
  Use `console.log()` to print the **second** value of array to the terminal.


## LOOPING THROUGH ARRAYS (Exercise 14 of 19)

  For this challenge we will use a `for` loop to access and manipulate a list of values in an array.

  Accessing array values can be done using an **integer**.

  Each item in an array is identified by a number, starting at 0.

  So in this array `hi` is identified by the number **1**:

     var greetings = ['hello', 'hi', 'good morning'];

  It can be accessed like this:

     greetings[1];

  So inside a for loop we would use the `i` variable inside the square brackets instead of directly using an integer.
  
  The challenge:

  > Create a file named `looping-through-arrays.js`.
  In that file, define a variable named **pets** that references this array: `['cat', 'dog', 'rat'];`
  >
  > Create a `for` loop that changes each string in the array so that they are plural.
  >
  > You will use a statement like this inside the for loop:
  >  ```js
  >   pets[i] = pets[i] + 's';
  >  ```

After the for loop, use `console.log()` to print the **pets** array to the terminal.

## OBJECTS (Exercise 15 of 19)

  Objects are lists of values similar to arrays, except values are
  ==identified by keys== instead of integers.

  Here is an example:

     var foodPreferences = {
       pizza: 'yum',
       salad: 'gross'
     };

The challenge:

> Create a file named `objects.js`.
In that file, define a variable named **pizza** like this: 
> ```js
> var pizza = {
>   toppings: ['cheese', 'sauce', 'pepperoni'],  
>   crust: 'deep dish',
>   serves: 2
>};  
> ```

Use `console.log()` to print the **pizza** object to the terminal.


## OBJECT PROPERTIES (Exercise 16 of 19)

  You can access and manipulate object properties –– the keys and values that an object contains –– using a method very similar to arrays.

  Here's an example using square brackets:

     var example = {
       pizza: 'yummy'
     };

     console.log(example['pizza']);

  The above code will print the string 'yummy' to the terminal.

  Alternately, you can use dot notation to get identical results:

     example.pizza;
     example['pizza'];

  The two lines of code above will both return yummy.
  
  The challenge:

  > Create a file named `object-properties.js`.
  In that file, define a variable named **food** like this:
  > ```js
  >   var food = {
  >     types: 'only pizza'
  >   };
  > ```

  Use `console.log()` to print the types property of the food object to the terminal.

## FUNCTIONS (Exercise 17 of 19)

  A function is a block of code that takes input, processes that input, and then produces output.

  Here is an example:

     function example (x) {
       return x * 2;
     }

  We can call that function like this to get the number 10:

     example(5)

  The above example assumes that the example function will take a number as an argument –– as input –– and will return that number multiplied by 2.

 The challenge:
 
 > Create a file named `functions.js`.
 In that file, define a function named **eat** that takes an argument named **food** that is *expected to be a string*.
>
> Inside the function return the food argument like this:
> ```js
> return food + ' tasted really good.';
> ```

Inside of the parentheses of console.log(), call the eat() function with the string bananas as the argument.

## FUNCTION ARGUMENTS (Exercise 18 of 19)

  A function can be declared to receive any number of arguments. Arguments can be from any type. 
  
  An argument could be a **string**, a **number**, an **array**, an **object** and even **another function**.

  Here is an example:

     function example (firstArg, secondArg) {
       console.log(firstArg, secondArg);
     }

  We can call that function with two arguments like this:

     example('hello', 'world');

  The above example will print to the terminal hello world.

 The challenge:

  > Create a file named `function-arguments.js`.
  In that file, define a *function* named **math** that takes **three arguments**.
  It's important for you to understand that argument names are only used to reference them.
  >
  > Name each argument as you like.
  > 
  > Within the math function, return the value obtained from *multiplying the second and third arguments and adding that result to the first argument*.
  > 

After that, inside the parentheses of `console.log()`, call the `math()` function with the number 53 as first argument, the number 61 as second and the number 67 as third argument.


## SCOPE (Exercise 19 of 19)

  Scope is the set of variables, objects, and functions you have access to.

  JavaScript has two scopes: **global** and **local**. 
  
  * A variable that is declared outside a function definition is a global variable, and its value is accessible and modifiable throughout your program. 
  * A variable that is declared inside a function definition is local. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function.

  Functions defined inside other functions, known as **nested functions**, have access to their parent function's scope.

  Pay attention to the comments in the code below:

  ```js
  var a = 4;    // a is a global variable, it can be accessed by the functions below

  function foo() {
      var b = a * 3;    // b cannot be accessed outside foo function, but can be accessed by functions
                      // defined inside foo
      function bar(c) {
      var b = 2;  // another `b` variable is created inside bar function scope
                  // the changes to this new `b` variable don't affect the old `b` variable
      console.log( a, b, c );
      }

      bar(b * 4);
  }

     foo(); // 4, 2, 48
  
  ```

  **IIFE**, Immediately Invoked Function Expression, is a common pattern for creating local scopes.

  Example:

  ```js
  (function(){ // the function expression is surrounded by parenthesis
      // variables defined here
      // can't be accessed outside
  })(); // the function is immediately invoked
  ```

 The challenge:

<blockquote> 

Create a file named `scope.js`.
In that file, copy the following code:

```
  var a = 1, b = 2, c = 3;

  (function firstFunction(){
      var b = 5, c = 6;

      (function secondFunction(){
          var b = 8;

          (function thirdFunction(){
              var a = 7, c = 9;

              (function fourthFunction(){
                  var a = 1, c = 8;

              })();
          })();
      })();
    })();
```

  > Use your knowledge of the variables' scope and place the following code inside one of the functions in scope.js so the output is `a: 1, b: 8, c: 6`

  > `console.log("a: "+a+", b: "+b+", c: "+c);`

