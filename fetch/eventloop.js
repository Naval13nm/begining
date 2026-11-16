console.log("1. Start");

setTimeout(() => {
    console.log("2. setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise (Microtask)");
});

console.log("4. End");


// Output Order:

// 1. 1. Start (Synchronous — runs immediately on the Call Stack)
// 2. 4. End (Synchronous — runs immediately on the Call Stack)
// 3. 3. Promise (Microtask) (Call Stack is empty, so Microtask Queue runs first)
// 4. 2. setTimeout (Macrotask) (Runs after all Microtasks finish, even though delay was 0ms)


// Component	Role in JavaScript Runtime
// Call Stack	Executes synchronous code line by line (Last-In, First-Out). JavaScript has only one Call Stack.
// Web APIs	Browser-provided features (setTimeout, fetch, DOM events) that handle background tasks outside the main JS thread.
// Microtask Queue	High-priority waiting line for Promise.then(), async/await, and queueMicrotask(). Runs before the Macrotask Queue.
// Callback (Macrotask) Queue	Standard waiting line for setTimeout(), setInterval(), and DOM event callbacks (click, scroll).



// How the Event Loop Works: 4 Core Parts


// Component	Role in JavaScript Runtime
// Call Stack	Executes synchronous code line by line (Last-In, First-Out). JavaScript has only one Call Stack.
// Web APIs	Browser-provided features (setTimeout, fetch, DOM events) that handle background tasks outside the main JS thread.
// Microtask Queue	High-priority waiting line for Promise.then(), async/await, and queueMicrotask(). Runs before the Macrotask Queue.
// Callback (Macrotask) Queue	Standard waiting line for setTimeout(), setInterval(), and DOM event callbacks (click, scroll).


