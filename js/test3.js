// let marks = [78, 35, 92, 45, 18, 65];

// function analyzeResults(marks) {
//     let passedarr = [];
//     let totalvalidmarks = 0;
//     let highestmarks = 0;
//     let lowestmarks = Infinity;


//     for (const element of marks) {

//         try {

//             if (element < 0 || element > 100 || typeof element !== 'number') {

//                 throw new Error('invalid marks :' + element);
//             }

//             if (element >= 40) {
//                 passedarr.push(element);
//                 totalvalidmarks = totalvalidmarks + element;
//                 highestmarks = Math.max(highestmarks, element);
//                 lowestmarks = Math.min(lowestmarks, element);
//             }
//         }

//         catch (error) {
//             return error.message
//         }

//     }

//     totalvalidmarks = totalvalidmarks / passedarr.length
//     return {
//         passedMarks: passedarr,
//         average: totalvalidmarks,
//         highest: highestmarks,
//         lowest: lowestmarks
//     }

// }

// let ans = analyzeResults(marks)
// console.log(ans)





//q2
// let word = " javaScript IS fun to LEARN ";
// function analyzeText(word) {
//     try {
//         if (typeof (word) != 'string' || word.trim().length === 0) {
//             throw new Error(`strings can't be empty or entered value is not string `);

//         }
//         else {
//             let wordCount = word.trim().split(" ").length
//             // console.log(wordCount)


//             let removedspaces = word.replaceAll(" ", "").toLowerCase();
//             let vowelCount = 0;
//             for (const element of removedspaces) {
//                 if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') vowelCount++;
//             }

//             // console.log(vowelCount);

//             let longestWord = word.trim().split(" ")
//             let maxword = longestWord[0];
//             for (const element of longestWord) {
//                 if (element.length > maxword.length) maxword = element;
//             }
//             // console.log(maxword)

//             let ans = [];
//             let formattedtext = word.trim().toLowerCase().split(" ")
//             for (let element of formattedtext) {
//                 element = element[0].toUpperCase().concat(element.slice(1, element.length))
//                 ans.push(element)
//                 //  return ans.push(element);

//             }
//             ans = ans.join(" ");

//             return {
//                 WordCount: wordCount,
//                 VowelCount: vowelCount,
//                 LongestWord: maxword,
//                 formattedtext: ans
//             }
//         }
//     }


//     catch (error) {
//         return error.message
//     }
// }

// let ans = analyzeText(word);
// console.log(ans)

let data = [
    { name: " Laptop ", quantity: 2, price: 50000 },
    { name: "Mouse", quantity: 0, price: 500 },
    { name: " KEYBOARD ", quantity: 5, price: 1000 },
    { name: "", quantity: 3, price: 200 },
    { name: "Monitor", quantity: 2, price: 8000 }
]

function processInventory(products) {
    let validproduct = [];
    let outstock = []
    let totalinventoryval = 0;

    data.map((x) => {

        if (x.quantity > 0 && x.name.trim().length !== 0) {
            x.name = x.name.trim().toLowerCase();
            validproduct.push(x);
            totalinventoryval = totalinventoryval + x.quantity * x.price;
        }

        else {

            if (x.name.trim().length !== 0) {
                x.name = x.name.trim().toLowerCase();
                outstock.push(x.name)
            }

        }
    })

    let highestval = -Infinity;
    let highestvalproduct = []

    validproduct.map((x) => {
        highestval = Math.max(highestval, x.price)

    })

    validproduct.map((x) => {
        if (x.price === highestval) highestvalproduct.push(x);
    })
    // console.log(highestvalproduct)


    return {
        ValidProducts: validproduct,
        outOfStock: outstock,
        totalInventoryValue: totalinventoryval,
        highestValueProduct: highestvalproduct

    }

    // console.log(validproduct)
    // console.log(outstock)
    // console.log(totalinventoryval)

}

console.log(processInventory(data))
















































