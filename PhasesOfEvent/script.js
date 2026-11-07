let parent=document.getElementById('parent');
let child=document.getElementById('child');
let button=document.getElementById('btn');


// 📜 Master Notes: Event Capturing, Target, & Bubbling


// 1. The Core Concept: The U-Shape Journey

// Whenever an event (like a click) happens on a page, it does not just appear on that single element. It takes a continuous, mandatory U-shaped journey from the very top of the document, down to your clicked element, and back up to the top.
// • The event always travels the full path.
// • Your event listeners are simply "checkpoints" waiting to intercept the event as it passes by.

// 2. The 3 Phases of Event Propagation

// Every event automatically passes through these three phases in strict chronological order:
// text
//        WINDOW (Starts here)          WINDOW (Ends here)
//               │                             ▲
//     PHASE 1:  │                             │  PHASE 3:
//    Capturing  ▼                             │   Bubbling
//           [#parent] (capture: true)     [#parent] (skips)
//               │                             ▲
//               ▼                             │
//           [#child]   (skips)            [#child]  (capture: false)
//               │                             ▲
//               └─────────► [#btn] ───────────┘
//                        PHASE 2: Target
// Use code with caution.

// 1️⃣ Phase 1: Capturing Phase (Top-to-Bottom)

// • The event journeys down from the root (window ➔ document ➔ html ➔ body) through ancestors until it reaches the target.
// • Default Behavior: Elements ignore the event during this phase unless you explicitly turn capturing on using { capture: true }.

// 2️⃣ Phase 2: Target Phase (On Target)

// • The event has arrived at the exact element that triggered the action (event.target).
// • The Special Target Rule: On the target element itself, the concept of capturing vs. bubbling does not apply. If multiple listeners are attached directly to the target, they will execute in the exact order they were written in your script.

// 3️⃣ Phase 3: Bubbling Phase (Bottom-to-Top)

// • The event journeys back up the tree, from the direct parent all the way to window.
// • Default Behavior: Browser event listeners listen during this phase by default ({ capture: false }).

// 3. Demystifying the capture Parameter

// The third parameter in addEventListener() is a configuration flag. It tells the browser when to execute your function.
// • { capture: true } ➔ "Run my function on the way down."
// • { capture: false } (or omitting it) ➔ "Run my function on the way back up."
// ⚠️ Crucial Rule: Turning capturing on for an element does not stop the event from going deeper. It simply ensures that this element executes its listener before its children.

// 4. Visualizing Your Code Mechanics

// Given your HTML structure:
// html
// <div id="parent">
//     <div id="child">
//         <button id="btn">Click</button>
//     </div>
// </div>
// Use code with caution.
// And your JavaScript configuration:
// • parent ➔ { capture: true }
// • child ➔ Bubbling (Default)
// • button ➔ Target (Default)

// Chronological Execution Timeline when clicking #btn:

// 1. Capturing Phase starts: Event moves down.
// 2. Event hits #parent. It has capture: true. ➔ Logs: "parent clicked" 🔴
// 3. Event hits #child. It has no capture flag. It remains quiet.
// 4. Target Phase reached: Event hits #btn. ➔ Logs: "button clicked" 🟡
// 5. Bubbling Phase starts: Event moves up.
// 6. Event hits #child. It is a bubbling listener. ➔ Logs: "child clicked" 🟢
// 7. Event hits #parent. It only has a capturing listener, which already fired. It remains quiet.

// 5. Controlling the Flow: stopPropagation()

// If you want to isolate an element and prevent parent containers from reacting to its events, you use event.stopPropagation().
// javascript
// button.addEventListener('click', (event) => {
//     console.log('Button clicked');
//     event.stopPropagation(); // The event stops here!
// });
// Use code with caution.
// • Effect: The event completely stops right after the current listener finishes.
// • In Bubbling: If used on #btn, the event never bubbles up to #child or #parent.
// • In Capturing: If used on #parent during a capture phase, the event is killed instantly. It will never reach #child or #btn.

// 6. Key Cheat Sheet: target vs currentTarget

// When writing your event logic, understanding the event object properties prevents bugs:
// • event.target ➔ The Origin. The exact, deepest element that user actually clicked (e.g., the actual text or icon inside the button). It never changes as the event travels.
// • event.currentTarget ➔ The Current Owner. The element whose event listener is running right at this exact microsecond. It changes dynamically at every single stop along the U-shape journey.


parent.addEventListener('click',(()=>{
    console.log('parent clicked');
    parent.style.background='red';
    parent.style.height='75px';

}),{capture:true})


child.addEventListener('click',(()=>{
    console.log('child clicked');
    child.style.background='green';
    child.style.height='40px';
}))

button.addEventListener('click',(()=>{
    console.log('button clicked');
    button.style.background='yellow';
    button.style.padding='10px'
}))



