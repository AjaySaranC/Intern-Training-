# Milestone 1 of NODE jS:

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
## HTTP Methods:

### A Stateless Protocol
- Two messages: request and response.
- HTTP request carries encoded data.

### HTTP Request
- Contains HTTP version, URL, HTTP methods, request headers, and body.
- Initial version 0.9 with only GET method. Current version: HTTP/3.

### HTTP Response
- Contains status code, HTTP response headers, and body.
- Status codes:
  - 1xx: Informational
  - 2xx: Success
  - 3xx: Redirection
  - 4xx: Client error
  - 5xx: Server error

### HTTPS
- Secure version of HTTP using SSL/TLS.

### Headers:
- HTTP headers are key-value pairs sent in both HTTP requests and responses. They provide metadata about the request or response, like content type, length, and authentication information.
- Example: In a response, you might see headers like.

### Body:
- The body of an HTTP request or response contains the actual data being sent.
- For example, in a POST request, the body might contain form data or JSON payload.
- In a response, it might contain the HTML of a webpage or the JSON data for an API.
```js
{
  "name": "Ajay",
  "email": "ajay@gmail.com"
}

```

### Content-Type:
- The Content-Type header tells the server or client what type of data is being sent. It helps the recipient understand how to interpret the data in the body.
- The MIME type is always displayed as a combination of two pieces of information, one indicating what type of medium it is and the other the sub-type of the medium.
`media type/sub-type`
- Types includes:
  - text : `text/css`, `text/javascript`, `text/xml`
  - image : `image/jpeg` , `image/gif`
  - video : `video/avi` , `video/avi`
  - audio : `audio/mpeg`
  - application : `application/javascript`