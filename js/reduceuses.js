const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCounts = fruits.reduce((accumulator, currentFruit) => {
    // If the fruit is already in our object, add 1 to its count.
    // If it's not there yet, initialize its count to 1.
    if (accumulator[currentFruit]) {
        accumulator[currentFruit] += 1;
    } else {
        accumulator[currentFruit] = 1;
    }
    
    // Always return the accumulator so the next step can use it!
    return accumulator;
}, {}); // <--- This {} is the initial value for the accumulator

console.log(fruitCounts);
// Output: { apple: 3, banana: 2, orange: 1 }



const usersArray = [
    { id: 'u101', name: 'Alice', role: 'Admin' },
    { id: 'u205', name: 'Bob', role: 'User' },
    { id: 'u441', name: 'Charlie', role: 'Moderator' }
];

const usersLookup = usersArray.reduce((accumulator, currentUser) => {
    // Set the user's ID as the key, and the user object as the value
    accumulator[currentUser.id] = currentUser;
    
    return accumulator;
}, {}); // <--- Starts with an empty object

console.log(usersLookup);
/* 
Output:
{
  u101: { id: 'u101', name: 'Alice', role: 'Admin' },
  u205: { id: 'u205', name: 'Bob', role: 'User' },
  u441: { id: 'u441', name: 'Charlie', role: 'Moderator' }
}
*/

// Why do this? Now you can find Bob instantly without a loop:
console.log(usersLookup['u205'].name); // Output: Bob





const fruits = ['apple', 'banana', 'apple'];
const counts = {}; // Start with an empty basket summary

for (const fruit of fruits) {
    // Step 1: fruit is 'apple'
    // Is counts['apple'] defined? No, it's undefined (falsy). 
    // So it skips 'if' and goes to 'else'. It sets counts['apple'] = 1.
    
    // Step 2: fruit is 'banana'
    // Is counts['banana'] defined? No. Goes to 'else'. Sets counts['banana'] = 1.
    
    // Step 3: fruit is 'apple' (again!)
    // Is counts['apple'] defined? Yes! It is 1 (truthy).
    // It enters the 'if' block and does: counts['apple'] += 1 (which makes it 2).

    if (counts[fruit]) {
        counts[fruit] += 1; // Key exists, increment the counter
    } else {
        counts[fruit] = 1;  // Key doesn't exist, create it and start at 1
    }
}

console.log(counts); // Output: { apple: 2, banana: 1 }


let inventory = { apple: 3 };

// Checking "banana" -> inventory["banana"] is undefined -> goes to else
if (inventory["banana"]) { 
    console.log("Banana exists!");
} else {
    console.log("Banana does NOT exist in the object yet."); // <-- This runs
}
