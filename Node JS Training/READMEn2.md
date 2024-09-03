# Milestone 2:
## Exporting and Consuming Modules:
- In Node.js, exporting and consuming modules allows you to split your code into manageable parts.
### Exporting Modules:
- functions, objects, or values can be exported from a module using module.exports or exports.

```js
const greet = (name) => {
  return `Hello, ${name}!`;
};

const farewell = (name) => {
  return `Goodbye, ${name}!`;
};

exports.greet = greet;
exports.farewell = farewell;
```

### Consuming Modules:
- To use the exported module, the require function can be used.
```js
const greet = require('./myModule'); 

console.log(greet('Ajay')); 

// OR

const { greet, farewell } = require('./myModule');

console.log(greet('Ajay')); 
console.log(farewell('Ajay')); 
```
## Exporting and Importing Module in node.js:
### Exporting modules
- `module.exports` is the primary way to export a single value or object from a module.
```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};
```
- `exports` is a shorthand to add properties to `module.exports`. It's useful for exporting multiple properties from a module.
```js

exports.uppercase = (str) => str.toUpperCase();
exports.lowercase = (str) => str.toLowerCase();
```
### Importing Modules:
- To use the exported module, the require function is used.
```js
const math = require('./math'); 
console.log(math.add(5, 3)); 
console.log(math.subtract(5, 3)); 

const utils = require('./utils');
console.log(utils.uppercase('hello')); 
console.log(utils.lowercase('WORLD'));
```

## How modules are loaded:
- In Node.js, modules are loaded using the require function, which is responsible for importing modules into your application.
- It includes the following steps:
  - Check Cache: Node.js caches loaded modules to improve performance and prevent redundant loading. 
  - Read File: If the module is not in the cache, Node.js reads the file content. 
  - Compile and Execute: Node.js compiles the JavaScript file into machine code (if it's not already compiled) and executes it within its own context.
  - Wrap in Function: Node.js wraps each module's code in a function to create a local scope and prevent variable leaks.

- Return Exports: After executing the module code, Node.js returns the module.exports object. This object contains all the properties and methods that the module has exported.

## Event Emitters - Web Sockets:
- Event Emitters and WebSockets are key concepts in Node.js for handling asynchronous events and real-time communication.
### Event Emitters:
- the EventEmitter class use to create and handle custom events.
- Creating an EventEmitter Instance:
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
```
- `on` method used to listen for specific events.

- Example:
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Alice'); 
```
### WebSockets:
- WebSockets enable real-time ,two way communication between the server and clients.
- WebSocket is a communication protocol enabling full-duplex communication, allowing simultaneous two-way communication between a user’s browser and the server.

## Exception Handling in node.js:
- Exception handling refers to the mechanism by which the exceptions occurring in a code while an application is running is handled.
- Node.js supports several mechanisms for propagating and handling errors. 
- Exception handling in synchronous code:If an error occurs in a synchronous code, return the error. 
  ```js
  
  let divideSync = function (x, y) {
    if (y === 0) {
      return new Error("Can't divide by zero")
    }
    else {
      return x / y
    }
  }

  let result = divideSync(9, 3)
  if (result instanceof Error) {
    console.log("9/3=err", result)
  }
  else {
    console.log("9/3=" + result)
  }
  result = divideSync(9, 0)
  if (result instanceof Error) {
    console.log("9/0=err", result)
  }
  else {
    console.log("9/0=" + result)
  }

  ```
  - using try and catch:
  ```js
    let divideSync = function (x, y) {
      if (y === 0) {
        throw new Error("Can't divide by zero");
      } else {
        return x / y;
      }
    };

    try {
      let result = divideSync(9, 3);
      console.log("9/3=" + result);
    } catch (error) {
      console.log("9/3=err", error.message);
    }

    try {
      let result = divideSync(9, 0);
      console.log("9/0=" + result);
    } catch (error) {
      console.log("9/0=err", error.message);
    }

  ```

### Web Sockets Example:
```js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('Client connected');

  // Send a message to the client
  socket.send('Welcome to the WebSocket server!');

  // Handle incoming messages from the client
  socket.on('message', message => {
    console.log('Received:', message);
    // Echo the message back to the client
    socket.send(`You said: ${message}`);
  });

  // Handle client disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is listening on ws://localhost:8080');

```

  
### Event Emitters:
- Event Emitters are a core part of Node.js, allowing objects to emit named events that can cause corresponding functions, known as listeners, to be called.
- Core Concept: An event emitter allows an object to produce events, and other objects can listen to these events and respond accordingly.
- Example Use: In a typical Node.js application, you might want to handle events such as a connection to a server, the completion of a file read, or the arrival of data on a stream.
- Basic Syntax:
```js
const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

```
- emit is used to trigger an event.
- on is used to add a callback function that's going to be executed when the event is triggered.

```js
eventEmitter.on('start', () => {
  console.log('started');
});
// running
eventEmitter.emit('start');
```

#### Argument passing in emit():
- The argument can be passed to eventEmitter using `emit()`.
```js
eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 23);

```
#### Multiple Arguments:
```js
eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);

```
#### Other methods:
- The other methods includes,
- `once()`: add a one-time listener
- `removeListener()` / `off()`: remove an event listener from an event
- `removeAllListeners()`: remove all listeners for an event

## Event Loop:
- The Event Loop is a fundamental concept in Node.js that enables non-blocking, asynchronous operations, making it highly efficient for I/O-bound tasks.
- Node.js is designed to handle many concurrent connections efficiently. This is possible because of the Event Loop.

### Working:
- Call Stack: When a function is called, it's added to the call stack. If a function requires an asynchronous operation (like reading a file), Node.js pushes this task to the background and continues processing other tasks.

- Background Tasks: The background operations (handled by Node.js APIs like fs, http, etc.) will eventually be completed, at which point they will push the associated callback function to the Callback Queue.

- Callback Queue: The callback queue holds the callback functions for tasks that have completed. The Event Loop constantly checks this queue.

- Event Loop Execution:

  - If the call stack is empty (i.e., all synchronous code has been executed), the Event Loop takes the first callback in the callback queue and pushes it onto the call stack.
  - The call stack then executes this callback, and the process continues.

### Phases of the Event Loop:
The Event Loop operates in several phases, each handling different types of operations:

- Timers Phase: Executes callbacks scheduled by setTimeout and setInterval.

- Pending Callbacks Phase: Executes I/O callbacks deferred to the next loop iteration (for example, some types of errors or network I/O callbacks).

- Idle, Prepare Phase: Used internally by Node.js for specific operations (not typically used in user applications).

- Poll Phase:

  - This is where the event loop spends most of its time. It processes events like I/O, checking for new I/O events and executing their associated callbacks.
  - If the poll phase is empty, and there are no timers set, the event loop will block here and wait for new I/O events.
- Check Phase: Executes callbacks from setImmediate.

- Close Callbacks Phase: Handles closing callbacks like socket.on('close', ...).