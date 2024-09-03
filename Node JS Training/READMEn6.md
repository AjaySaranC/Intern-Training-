# Milestone 6 of NODE js
## Memory Leaks:
### Memory management
- In node.js , memory management is crucial for ensuring optimal performance and efficiency.
- The V8 JavaScript engine, developed by Google and used by Node.js, employs automatic memory management through a process known as garbage collection.

#### Heap:
- The heap is a region of memory used for the dynamic allocation of objects during the runtime of a program.
- In Node.js, the heap is where objects, closures, and other dynamically allocated data reside.
- The V8 engine divides the heap into two main segments:
  - the young generation 
  - the old generation.
- Objects initially start in the young generation and are promoted to the old generation if they survive multiple garbage collection cycles.

#### Stack:
- The stack, in contrast to the heap, is a region of memory used for the execution of function calls and management of local variables.
- Each function call in Node.js creates a new frame on the stack, containing information about the function's local variables, parameters, and return address.
- The stack operates in a last-in, first-out (LIFO) manner, with each function call's frame being pushed onto the stack and popped off when the function completes.

#### Memory allocation:
- In Node.js, memory allocation occurs when variables and objects are dynamically created during the execution of a program.
##### Bump-pointer Allocation:
- Allocates memory by moving a pointer up the heap, and when it reaches the end, it triggers garbage collection.
##### Free List Allocation:
- Allocates memory from a list of free memory chunks, reusing previously allocated space.

### Garbage Collection:
- Garbage collection is the process of identifying and reclaiming memory occupied by objects that are no longer in use. 
- Garbage collection cycles, such as Scavenge for the young generation and Mark-Sweep-Compact for the old generation, help reclaim memory by identifying and collecting unused objects.


### Understanding memory leaks:

Common scenarios where memory leaks can happen,
- Unclosed Event Listeners : Event listeners that are not properly closed or removed can accumulate and cause memory leaks. 
- Circular References : Circular references, where objects reference each other in a loop, can prevent the garbage collector from reclaiming memory.
- Unclosed Connecions : Leaving database connections, file streams, or network sockets open without proper closure can lead to resource leaks.\
- Timers and Intervals : Repeatedly setting timers or intervals without clearing them can lead to memory leaks.
- Holding onto Unused Objects : Keeping references to objects in memory, even after they are no longer needed, can contribute to leaks.
- External APIs and Resources : Failing to release resources obtained from external APIs, such as third-party libraries or services, can lead to memory leaks.

### Node.js Memory Leak Detectors

- memwatch : This module is useful because it can emit leak events if it sees the heap grow over 5 consecutive garbage collections.
- Heapdump : Heapdump is another great tool for taking snapshots of the heap memory. You can then later inspect them in the Chrome Developer Tools.
- node-inspector:  memwatch and heapdump can’t connect to a running app. However, node-inspector can! It lets you connect to a running app by running the node-debug command. This command will load Node Inspector in your default browser.

- V8 Inspector & Chrome Dev Tools : In order to expose the inspector, let’s run Node.js with the –inspect flag.

### Monitoring Tools
- We need proper monitoring tools to give us historical data a time dimension where we can track and gain real insight into how our app is behaving.Tools includes,
  - Sematext Monitoring
  - PM2
  - Clinic.js
  - Prometheus
  - Express Status Monitor
  
## Threads:
  - Threads are lightweight units of execution within a process.
  - They share the same memory space and resources (like CPU time) of the process they belong to.

### Usage of Threads:
  - The primary purpose of threads is to enable parallel processing within a single process.
  - Beneficial for task involving waiting ,such as:
    - I/O operations
    - Long Task or Calculation
### Benefits:
  - Improved Performance
  - Efficient Resource Utilization
  - Scalability

### Factors to be considered
  - Shared Memory : Single process`s memory and resources are shared across multiple threads
- Deadlocks : Situation where two or more threads depend on each other.
- Overhead : Creating and managing too many threads leads to overhead.
 
 ### Threads in Node JS:
 - In the context of Node.js, threads play a crucial role in handling non-blocking I/O operations.
- Threads allow you to perform multiple tasks concurrently within a single process, which is useful for CPU-intensive operations that would otherwise block the event loop.
- Node.js traditionally uses an event-driven, non-blocking I/O model, which is single-threaded.
- However, with the introduction of the `worker_threads` module in Node.js, you can now utilize multiple threads to handle such tasks.

#### Main Thread :
- The main thread handles non-blocking I/O operations, executing JavaScript code, and processing events.
- The event loop is the core of Node.js's single-threaded architecture, managing asynchronous operations.

#### Worker Thread :
- Worker threads allow you to run JavaScript code in parallel, using multiple threads.
- These threads can be used for CPU-intensive tasks like processing large datasets, image manipulation, or complex calculations.
- Workers run in separate threads, isolated from the main thread, but can communicate with it through messages.

### Role of thread in node js
- The event loop is a central mechanism in Node.js that manages the execution of callbacks and I/O operations.
-  It continuously monitors the event queue, which holds callbacks waiting to be executed.
- When an I/O operation completes, its corresponding callback is placed in the event queue.
- The event loop then retrieves callbacks from the queue and executes them, ensuring that the application responds to events and handles I/O operations efficiently.


### Example code of thread in Node JS
```js
// main.js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    // This code is executed in the main thread
    console.log('Main thread started');

    // Creating a worker thread
    const worker = new Worker(__filename, {
        workerData: { num: 42 }
    });

    // Receiving messages from the worker
    worker.on('message', (result) => {
        console.log(`Received from worker: ${result}`);
    });

    // Handling errors from the worker
    worker.on('error', (error) => {
        console.error(`Worker error: ${error}`);
    });

    // Handling worker exit
    worker.on('exit', (code) => {
        console.log(`Worker exited with code: ${code}`);
    });
} else {
    // This code is executed in the worker thread
    console.log('Worker thread started');

    // Accessing the data sent from the main thread
    const { num } = workerData;

    // Performing a CPU-intensive task
    const result = num * 2;

    // Sending the result back to the main thread
    parentPort.postMessage(result);
}

```
### Clusters in node.js 
- Node.js is single-threaded, meaning it runs on a single CPU core.
-  Clusters help solve this by allowing you to create multiple copies of your application, each running on a different CPU core.


#### Working of Clusters:
- Master Process: This is the main process that controls everything. It doesn't handle any requests directly but instead manages worker processes.

- Worker Processes: These are the actual instances of your Node.js application that handle incoming requests. Each worker runs on a separate CPU core.

## Streams in NODE JS
- Node.js streams are a key part of handling I/O operations efficiently.
- They provide a way to read or write data continuously, allowing for efficient data processing, manipulation, and transfer.
- The stream module in Node.js provides an abstraction for working with streaming data.
- Streams are a powerful feature that allows handling data in chunks rather than loading it all at once, which is efficient for both memory usage and performance.

### Types of Streams:

#### Readable Streams
- Readable streams allow you to read data from a source.
- Common examples include reading from a file, receiving HTTP requests, or reading from a database.
- Data can be consumed in chunks, which helps manage memory effectively.

##### Methods:
- `read(size)`: This method is implemented in a custom readable stream to push data into the stream buffer. The size parameter specifies how much data to read.
- `push(chunk)`: Adds a chunk of data to the internal buffer. Passing null signals the end of the data.

##### Example
```js
// Sample JavaScript Code for creating
// a Readable Stream
// Accessing streams
const { Readable } = require('stream');

// Reading the data 
const inStream = new Readable({
    read() { }
});

// Pushing the data to the stream
inStream.push('Hello ');
inStream.push(
    'Everyone! How are You?');

// Indicates that no more data is
// left in the stream
inStream.push(null);

// Echoing data to the standard output
inStream.pipe(process.stdout);

```

#### Writable Streams
- Writable streams allow you to write data to a destination.
- They are often used for writing to files, sending HTTP responses, or outputting data to a database.
- Writable streams can write data in chunks as well.

##### Methods:
- `write(chunk, encoding, callback)`: Writes a chunk of data to the stream. The encoding specifies the character encoding, and callback is called when the write is complete.
- `end(chunk, encoding, callback)`: Signals that no more data will be written to the stream. Optionally, a final chunk can be written.

##### Example
```js
const { Writable } = require('stream');

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk}`);
    callback();
  }
});

writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.end();


```

#### Duplex Streams
- Duplex streams are streams that can be both readable and writable. 
- They can be used to read and write data simultaneously.

##### Methods:
- `_read(size)`: This method is implemented to push data into the readable side of the duplex stream.
- `_write(chunk, encoding, callback)`: This method is implemented to handle data written to the writable side of the duplex stream.

##### Example
```js
const net = require('net');

// Create a duplex stream using a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // Handle data received from the client
  socket.on('data', (data) => {
    console.log('Received from client:', data.toString());
    // Echo the data back to the client
    socket.write(`Echo: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});


```

#### Transform Streams
- Transform streams are duplex streams that can modify or transform the data as it is written and read.

##### Methods:
- `_transform(chunk, encoding, callback)`: This method is implemented to modify the chunk of data. The modified data is pushed into the readable side of the stream.
- `_flush(callback)`: This method is called at the end of the stream to perform any final transformation or cleanup.

##### Example
```js
const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const transformedChunk = chunk.toString().toUpperCase();
    this.push(transformedChunk);
    callback();
  }
});

transformStream.on('data', (chunk) => {
  console.log(`Transformed: ${chunk}`);
});

transformStream.write('hello');
transformStream.write('world');
transformStream.end();


```