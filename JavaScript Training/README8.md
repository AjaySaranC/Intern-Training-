# Milestone 8:
## Function Expressions:
- The function expression is used to define a function inside any expression.
- The Function Expression allows us to create an anonymous function that doesn’t have any function name.
- This can be used as IIFE (Immediately Invoked Function Expression), which runs as soon as it is defined.
- Has to be stored in variable and can be accessed using variable name.
- Includes,
    - Function expression anonymous
    - Function expression with named
    - Arrow Function.
- Syntax for Function Declaration:
```javascript
function function_name(x,y){
    statements...
    return z;
}
```
- Syntax for Function Expression(Anonymous):
```javascript
let variable_name = function (x,y){
    statements...
    return z;
};
```
- Syntax for Function Expression(named):
```javascript
let variable_name = function function_name(x,y){
    statements...
    return z;
};
```
- Syntax for Arrow Function:
```javascript
let variable_name = (x,y) => {
    statements...
    return z;
};
```

- Function declaration example:
```javascript
function add(x, y) {
    let z = x + y;
    return z;
}
console.log("Addition : " + add(10, 20));
```
- Function expression(anonymous) example:
```javascript
let variable = function (x, y) {
    let z = x + y;
    return z;
}
console.log("Addition : " + variable(10, 20));
```
- Function expression(named) example:
```javascript
let variable = function add(x, y) {
    let z = x + y;
    return z;
}
console.log("Addition : " + variable(10, 20));
```
- Arrow function example:
```javascript
let variable = (x, y) => {
    let z = x + y;
    return z;
}
console.log("Addition : " + variable(10, 20));
```

## Recursive function:
- A recursive function is a function that calls itself somewhere within the body of the function.
- The recursive function calls itself within the body of the function. 
- It will repeat calling itself until the desired output is achieved.
- The recursive function must have these three elements
    - Function definition
    - Base condition
    - Recursive call
- The base condition will let know when the function to be stopped calling.

```javascript
function Count(n){
    let number = Number(n)
    if (number<1) { //base condition
        return 0;
    }
    return number+Count(number-1);
}

console.log("Result " + Count(5)); // 15
```

## Closures:
-  Closures in JavaScript are functions that retain access to variables from their containing scope even after the parent function has finished executing. 
- They’re useful for maintaining private data, creating modular code, and implementing callback functions with persistent state.

### Cloures and Variable:
- A closure variable in JavaScript refers to a variable that is captured and remembered by a function, even after the function in which it was declared has finished executing.
1. Lexical Scope: javaScript uses lexical scoping, meaning that a function’s scope is determined by its position within the source code.
2. Function creations: When a function is defined, it captures the scope in which it was created. This captured scope includes all the variables available at that time within the function's outer scopes.
3. Persistent Variables: variables that are part of the captured scope are called closure variables. These variables persist across the lifetime of the closure, allowing the inner function to access them even after the outer function has finished executing.

```javascript
function createCounter() {
    let count = 0; // count is a closure variable

    return function() {
        count++; // the inner function has access to count
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

```
#### Use Case:
1. Maintaining State: Closures are often used to maintain state between events or function calls.
2. Private Variables: Closures provide a way to create private variables, allowing you to encapsulate data and only expose specific methods to interact with that data.
```javascript
function createPerson(name) {
    let age = 0; // age is a private variable

    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        incrementAge: function() {
            age++;
        }
    };
}

const person = createPerson('Alice');
console.log(person.getName()); // Alice
console.log(person.getAge()); // 0
person.incrementAge();
console.log(person.getAge()); // 1

```
- In the above code,only the methods getname, getage is known but how the variables are used inside it is private.
3. Callbacks and Asynchronous Code: Closures are essential for handling callbacks and asynchronous operations, allowing you to retain access to variables even after asynchronous operations are completed.


### this object:
- In javascript, `this` keyword refers to an object.
- The `this` keyword refers to different objects depending on how it is used.

| Context                                    | `this` refers to                    |
|--------------------------------------------|-------------------------------------|
| In an object method                        | The object                          |
| Alone                                      | The global object                   |
| In a function                              | The global object                   |
| In a function, in strict mode              | `undefined`                         |
| In an event                                | The element that received the event |
| Methods like `call()`, `apply()`, `bind()` | Any object                          |

- `this` in a method:
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
```

- `this` Alone:
```javascript
let x = this;
document.getElementById("demo").innerHTML = x; // returns [object Window]
```

- `this` in a function: In a browser window the global object is [object Window].In a function, the global object is the default binding for this.
```javascript
function myFunction() {
  return this;  // [object Window]
}
```

- `this` in a Function (Strict):
```javascript
"use strict";
function myFunction() {
  return this; // undefined
}
```
- `this` in Event Handlers:
```html
<button onclick="this.style.color='red'">Click Me!</button>
```
- Object Method Binding:
- In these examples, `this` is the person object,
```javascript
const person = {
  firstName  : "django",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
```
  - to access particular property in the object.
      ```javascript
      const person = {
        firstName: "Clark",
        lastName : "Kent",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
      ```
#### `call()` method:
- The `call()` method is used to pass one object as an argument of another object. 
```javascript
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"Clark",
  lastName: "Kent",
}

let x = person1.fullName.call(person2); 
console.log(x); // Clark Kent
```

#### `apply()` method:
- The apply() method is similar to the call() method.
- The apply() method takes arguments as an array but call() can takes arguments separately.
```javascript
const person = {
  firstName: "Robert",
  lastName : "Angier",
  fullname : function( ) {
    return this.firstName + " " + this.lastName ;
  }
};

const person1 = {
  firstName: "Alfred",
  lastName : "Borden"
};
let x = person.fullname.call(person1, "Mumbai" , "Maharashtra");
let y = person.fullname.apply(person1, ["Mumbai" , "Maharashtra"]);
console.log(x);
console.log(y);


```

#### `bind()`  method:
- the bind borrows a function from an object and assigns as a function.
```javascript
const person = {
  firstName: "Robert",
  lastName : "Angier",
  fullname : function( ) {
    return this.firstName + " " + this.lastName ;
  }
};

const person1 = {
  firstName: "Alfred",
  lastName : "Borden"
};
let x = person.fullname.bind(person1);

console.log(x());

```

### Memory Leaks in javascript:
- A memory leak, is a memory allocation that the JavaScript engine is unable to recover.
- When we add objects and variables in program, js allocates memory and it is intelligent enough to release the memory when the objects are no longer required.

Most common JavaScript memory leaks, includes:
#### Global variables:
- When data is being stored in global variables, it causes memory leaks 
- e.g the use of var in the code instead of let or const, also undeclared variables are being stored in the global object.
#### Closure:
- A clousre is the one in which the nested function uses the scope or has the access to its parent function.
#### Forgotten Timers:
 - The timer function `SetTimeout` and SetInterval in JS causes memory leak.

#### Out of DOM reference:
- This will comes under eventlistener.If the eventlisterner is referencing a node, the garbage collection will not collect it even though its operation is done untill removeEventListener is done.


## Mimicking Block Scope:
- In javascript, prior to introduction of `let` `const` there was no block scope.
- Variables declared with var were function-scoped or globally scoped .
```javascript
if (5 == 5)
{
  var info = {
    id: 8072,
    username: 'dark_knight',
    rank : 'Captain'
  };
}
console.log(info.id);//8072
//We can access it. We don't want that.
```
### Immediately Invoked Function Expression (IIFE)
- Using this we can mimic the block scope.
- it is a self execution function.
```javascript
if (5 == 5)
{
  (function(){
    //private block scope.
    var info = {
        id: 8072,
        username: 'dark_knight',
        rank : 'Captain'
      };
  })();
 
}
console.log(info.id);//Reference Error.
```

## Synchronous Programming:
- Synchronous programming in JavaScript refers to executing code in a sequential manner.
- Each operation must complete before the next one begins.
-  This means that the code runs line by line, and the next line cannot execute until the current line has finished.

### Sequential Execution:
```javascript
function synchronousTask() {
  console.log("Task 1");
  console.log("Task 2");
  console.log("Task 3");
}

synchronousTask();
```
- In this code, “Task 1” will be logged, followed by “Task 2” and finally “Task 3” in that precise order.

### Blocking Nature:
- The code involves blocking state when a task is running, which means the flow below this task have to wait including user interface.
- This Results in unresponsive web app, especially when tasks are time-consuming.
```javascript
function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const result = calculateSum(10000); // This operation may take a while
console.log(result);
```
- `calculateSum` function sums numbers from 1 to 10,000 sequentially which takes more time.

### Limitations:
- Performance: Synchronous code can be inefficient for operations that involve waiting, such as network requests or file I/O, since other code cannot run until the current operation completes.
- User Experience: In a browser environment, synchronous code can cause the UI to become unresponsive while waiting for long-running tasks to complete.

## Asynchronous Programming:
- Asynchronous programming in JavaScript allows the execution of tasks without blocking the main thread, enabling the handling of multiple operations concurrently. 
- This is particularly useful for operations that involve waiting, such as network requests, file I/O, or timers, where blocking the main thread would degrade performance and user experience.
```javascript
document.write("Hi");
document.write("<br>");
 
setTimeout(() => {
    document.write("Let us see what happens");
}, 2000);
 
document.write("<br>");
document.write("End");
document.write("<br>");
```
-  logs in Hi then rather than executing the setTimeout function it logs in End and then it runs the setTimeout function.

## Call Back:
- A callback is a function passed as an argument to another function.
- This technique allows a function to call another function.
- A callback function can run after another function has finished.
### Function sequence:
Functions in JS are executed in the sequence they are called. Not in the sequence they are defined.
```javascript
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Welcome");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
</script>

</body>
</html>
// output : Goodbye
```
- To avoid two function call and prevent a function from calling another function, call back is used.

### JS Callbacks:
- Callbacks are important in JavaScript as they enable you to execute code after an asynchronous task finishes. 
```javascript
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
function Display(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(name, myCallback) {
  let text = "Hello  " + name;
  myCallback(text);
}

myCalculator("Ajay", Display);
</script>

</body>
</html>

```
- Example with aynchronous function:
```javascript
function mainFunction(callback) {
  console.log("Start");
  setTimeout(function() {
    callback("Hello There!");
  },2000);
  console.log("End");
}

function callbackFunction(result) {
  console.log("Message:  " + result);
}

mainFunction(callbackFunction);
```
- Call Back for array element:
```javascript
let arr = ['apple','ball' , 'cat' , 'dog'];
function mainFunction(arr ,callback) {
  console.log("Start");
  arr.forEach(callback);
  console.log("End");
}

function callbackFunction(item , index) {
  console.log("Position :  " + index + "    Value :  " + item);
}

mainFunction(arr ,callbackFunction);
```
## Avoid Call Back hell:

### Call Back Hell:
- Callback hell, also known as the "Pyramid of Doom" . 
- It refers to the situation in JavaScript programming where callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain.
- This often occurs when performing a series of asynchronous operations that depend on each other.
- Example:
```javascript
doSomething(function(result1) {
  doSomethingElse(result1, function(result2) {
    doMore(result2, function(result3) {
      doFinalThing(result3, function(result4) {
        console.log(result4);
      });
    });
  });
});

```
### Problems of Callback hell:
- Readability
- Maintainability
- Error Handling
- Scalability

### Avoiing Callback hell:
- Promises: Promises allow you to chain asynchronous operations, reducing nesting.
- Async/Await: These keywords make asynchronous code look synchronous, improving readability.
- Modularization: Breaking the code into smaller, reusable functions helps manage complexity.
- Control Flow Libraries: Libraries like async.js provide control flow mechanisms for handling asynchronous code.

## JavaScript Promise:
- JavaScript Promises are used to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code. 
- They represent future values, associating handlers with eventual success or failure, resembling synchronous methods by postponing value delivery.
- It contains : Producing code and Consuming code.
- Syntax:
```javascript
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
- The promise constructor takes only one argument which is a callback function
- The callback function takes two arguments, resolve and reject
### States of promise:
- `Fulfilled` : Action related to the promise succeeded.
- `Rejected`  : Action related to the promise failed
- `Pending`   : Promise is still pending i.e. not fulfilled or rejected yet
- `Settled`   :	Promise has been fulfilled or rejected

### Consumers of promise:
- Promises can be consumed by registering functions using .then and .catch methods.
- Takes two parameter:
  - The first function executes when promise is resolved and a result is received.
  - The second function executes if the promise is rejected and an error is received.

### Catch in promise:
- Promise catch() Method is invoked when a promise is either rejected or some error has occurred in execution.
- It is used as an error handler whenever there is a possibility of error.
- Takes one function as an argument.


### Example 
```javascript
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// producing code

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise  // consuming code
.then(
  function(value) {
      console.log(value);
      
  }
)
.catch(function(error){
    console.log(error);
});
```
- With two promise contructor and without catch in consuming block:
```javascript
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hello');
	}, 100);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Ajay');
	}, 100);
});

promise2.then((value) => {
	console.log(value)},
	(reject) => {
	    console.log("rejected");
	}
);

promise1.then((value) => {
	console.log(value);

});

```
### Promise.all method:
- The Promise.all method in JavaScript is used to handle multiple promises concurrently.
- It takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises reject.
- It takes an array of promises as input and gives a single promise a an output.
- syntax:
```javascript
Promise.all(iterable);
```
#### Rules:
- If passed argument is empty, it returns a Promise that is already resolved.
- If the passed iterable contains no promises, it returns a Promise that is resolved asynchronously.
- For all other cases, it returns a pending Promise.

#### Example 1 : with resolve
```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42; // not a promise but promise.all method treats as resolved one.
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, 42, 'foo']
  })
  .catch(error => {
    console.error(error);
  });

```
#### Example 2: with reject / error:
```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>{
    resolve("Hello")
});
const promise3 = new Promise((resolve, reject) => {
  reject("Error")
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); 
  })
  .catch(error => {
    console.error(error);
  });
 // output: Error
```

### Promise.allSettled() Method:
- Promise.allSettled() method in JavaScript is used to handle multiple promises concurrently and return a single promise.
- Unlike Promise.all(), Promise.allSettled() does not short-circuit when one of the promises is rejected; instead, it waits for all promises to settle, providing information about each one.
- syntax:
```javascript
Promise.allSettled(iterable);
```

#### Property:
- Each object in the array will have:
  - `status` property: either `fulfilled` or `rejected`.
  - `value` property if the promise is fulfilled.
  - `reason` property if the promise is rejected.

  #### Example
  ```javascript
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) =>{
        setTimeout(resolve,1000,"Hello")
    });
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(reject,1000,"Error")
    });

    Promise.allSettled([promise1, promise2, promise3])
      .then(results => { 
          results.forEach(
              (result) =>{
                  
          if(result.status == 'fulfilled'){
              console.log('Fulfilled with value:'+ result.value);
          }
          else if(result.status == 'rejected'){
              console.log('Rejected with reason:'+ result.reason);
          }
          else{
              console.log('Fulfilled with value:'+ result.value);
          }
      }
        );
      });
 

  /*
  output:
    Fulfilled with value:3
    Fulfilled with value:Hello
    Rejected with reason:Error 
    */
  ```
### Promise.race():
- The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
- Reallife example can be running race, whoever comes first wins.
```javascript
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, "one");
});
 
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "two");
});
 
Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
});
// output: "two"
```

### Promise finally() Method:
- The finally() method of the Promise object is used to return a Promise when a Promise is settled, that is, it is either fulfilled or rejected.
```javascript
let task = new Promise((resolve, reject) => { 
setTimeout(() => { 
	reject("Promise has been rejected!"); 
}, 2000); 
}); 

task 
.then( 
	(result) => { 
	console.log(result); 
	}, 
 
	(error) => { 
	console.log("Error:", error); 
	} 
) 

.finally(() => { 
	console.log( 
	"This is finally() block which is executed after Promise is settled"
	); 
});

/*
Output:
ERROR!
Error: Promise has been rejected!
This is finally() block which is executed after Promise is settled
*/
```

## Bluebird Promise:
- Bluebird is a powerful and feature-rich promise library for JavaScript.
- It offers more features and better performance than the native Promise implementation, especially in environments where native promises are not well optimized.
- `new promise` constructor is used to create a promise.
- to use bluebird in the project, we have to import it or to use require.
```js
const Promise = require('bluebird');

```
```js
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Hello, Bluebird!');
    }, 1000);
  });
  
  myPromise.then(result => {
    console.log(result); // 'Hello, Bluebird!'
  });
  
```

### Promisify:
- Bluebird provides a utility function called promisify that converts callback-based functions to promise-based functions.
```js
function delayedGreeting(name, callback) {
    setTimeout(() => {
      callback(null, `Hello, ${name}!`);
    }, 1000);
  }

  const Promise = require('bluebird');

  const delayedGreetingAsync = Promise.promisify(delayedGreeting);
  
  delayedGreetingAsync('World')
    .then(greeting => {
      console.log(greeting); // 'Hello, World!'
    })
    .catch(err => {
      console.error(err);
    });
  
```
### Promisify All:
- we can use this to promisify all functions of an object using promisifyAll.
```js
const Promise = require('bluebird');

Promise.promisifyAll(asyncOperations);

asyncOperations.delayAsync()
  .then(result => {
    console.log(result); // 'Delay done'
    return asyncOperations.immediateAsync();
  })
  .then(result => {
    console.log(result); // 'Immediate done'
  })
  .catch(err => {
    console.error(err);
  });


```
### Bluebird Methods:
#### Promise.map
- Similar to Array.prototype.map, but works with promises and runs a concurrency limit.
```js
const urls = ['url1', 'url2', 'url3'];

Promise.map(urls, url => {
  return fetch(url).then(response => response.json());
}, { concurrency: 2 })
  .then(results => {
    console.log(results);
  });

```
#### Promise.each:
Iterates over an array of promises in series.
```js
const tasks = [task1, task2, task3];

Promise.each(tasks, task => {
  return task();
})
  .then(() => {
    console.log('All tasks completed');
  });

```
#### Promise.all
- Similar to native Promise.all, but can handle more types of iterables.
```js
const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then(results => {
    console.log(results);
  });

```
#### Promise.props
Waits for the properties of an object to be resolved.
```js
const obj = {
  prop1: Promise.resolve(1),
  prop2: Promise.resolve(2),
  prop3: Promise.resolve(3)
};

Promise.props(obj)
  .then(results => {
    console.log(results); // { prop1: 1, prop2: 2, prop3: 3 }
  });

```
#### Promise.delay
Creates a promise that resolves after a specified delay.
```js
Promise.delay(2000)
  .then(() => {
    console.log('2 seconds later...');
  });

```

#### Promise.timeout
Sets a timeout for a promise, causing it to reject if it takes too long.
```js
Promise.resolve('Hello')
  .timeout(1000)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Operation timed out');
  });

```
## Async and Await in javascript
- Async and Await in JavaScript are powerful keywords used to handle asynchronous operations with promises.
- `async` functions implicitly return promises.
- `await` pauses the execution until the promise is resolved.
### Async Function:
- It allows to write promise based code as it were synchronous.
- async function always return a promise, if value returned isnt a promise it always wrap it in a resolved promise.

### Await function:
- `await` keyword is used to wait for a promise to get resolved
- Can be used only within async block.


### Example Program:
```js
function async_await(){
    let promise = new Promise((resolve,reject) => resolve("Hello"));
    
    let promise2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Ajay")
        },1000)
    });
    
    let combined = Promise.all([promise,promise2]);
    
    return combined;
}

async function display(){
    let result = await async_await();
    console.log(result);
}

display();
```

### Advantages:
- Improved Readability
- Error Handling
- Avoids Callback Hell
- Better Debugging

## Converting Callback to Promise
- consider the below call back example
```js
function fetchData(callback) {
    setTimeout(() => {
        callback(null, "Data received");
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});

```
- to convert this into a promise code...
```js
function fetchData() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data received");
         }, 1000);
    })
    
    return promise;
    
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));

```
## Converting promise to async await:
```js
function fetchData() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            let v =false;
            if(v == true){
               resolve("Data received"); 
            }
            else{
                reject("Data Isnt Received");
            }
            
         }, 1000);
    })
    
    return promise;
}

async function display(){
    try{
        let data = await fetchData();
        console.log(data);
    }catch (error){
        console.error(error.message);
    }
}

display();

```

## Why async is needed in js:
- async and await are features introduced in JavaScript ES2017 (ES8) to simplify working with asynchronous code.
- They are designed to make asynchronous code easier to read and write compared to traditional methods like callbacks and promises
- It needed in js because
  - Simplifies Asynchronous Code.
  - Improves Error Handling
  - Makes Code More Sequential and Readable
  - Avoids Callback Hell
  - Combines with Promises
