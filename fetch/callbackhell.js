
// 1. Callback Hell (The Problem)

// When each step depends on the previous step, callbacks nest deeper and deeper to the right (often called the "Pyramid of Doom"):

// getUser(userId, function(user) {
//     getOrders(user, function(orders) {
//         getOrderDetails(orders[0], function(details) {
//             console.log(details);
//         });
//     });
// });



// 2. Promises with .then() and .catch() (Fixes Callback Hell)

// Instead of nesting inside callbacks, you return each Promise and chain .then() flatly:

// getUser(userId)
//     .then(user => getOrders(user))
//     .then(orders => getOrderDetails(orders[0]))
//     .then(details => console.log(details))
//     .catch(error => console.error(error)); // One catch handles errors for ALL steps!


//     (Note: You only create "Promise Hell" if you mistakenly nest .then() inside another .then() instead of returning the Promise and chaining it flatly.


// 3. async / await (Cleanest Modern Way)

// Uses Promises behind the scenes without needing .then() chains:

// async function showOrderDetails(userId) {
//     try {
//         const user = await getUser(userId);
//         const orders = await getOrders(user);
//         const details = await getOrderDetails(orders[0]);
//         console.log(details);
//     } catch (error) {
//         console.error(error);
//     }
// }
