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
