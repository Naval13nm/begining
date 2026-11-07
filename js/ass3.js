// let input="helloo world";
// console.log(input.length)

// q2
// let input="javascript";
// console.log(input[0])
// console.log(input[input.length-1])
// let length=input.length-1
// console.log(length)


// q3
// let input="JavaScript Programming"
// console.log(input.toLowerCase())
// console.log(input.toUpperCase())

// let input= " Hello JavaScript ";
// console.log(input.trim())

// let input= "I love Java . Java is powerful.";
// let ans=input.split(" ").map((x)=>{
//    if(x==='java'||x==='Java') {
//     x='JavaScript';
//    }
//    return x
// })

// console.log(ans.join(" "))



// q6
// let input = "I am learning JavaScript";
// let ans;

// for (const x of input.split(" ")) {
//     if (x == 'learning') {
//         ans=x;
//         console.log(input.indexOf(x))
//     }
// }
// console.log(ans);


// q8
// let input="programming";
// let count=0;
// for (const element of input) {
//     if(element==='m') count++;
// }
// console.log(count)


// q9
// let input="report2026.pdf";
// console.log(input.startsWith('report'))
// console.log(input.endsWith('.pdf'))



// q10
// let input="JS is easy. Learning JS is fun."
// let arr=input.split(" ");
// console.log(arr[0],arr[arr.length-1])
// console.log(input.indexOf(arr[0]),input.indexOf(arr[arr.length-1]))


// q11
// let input= "Hi ";
// console.log(input.repeat(3))


// q12
// let input="JavaScript is easy to learn";
// console.log(input.split(" "))
// console.log(input.split(" ").length)


// q13
// let arr=["Aman", "Riya", "Rahul"]
// console.log(arr.join(" "))


// q14
// let input="245";
// console.log(input.padStart(6,0))


// q15
// let input1="JavaScript"
// let input2="javascript"
// console.log(input1.toLowerCase()===input2.toLowerCase());



// q16
// let input="hello"
// console.log(input.split("").reverse().join(''))


// q17
// let input="Madam"
// console.log(input.toLowerCase().split("").reverse().join('')===input.toLowerCase())


// q18
// let input = "Hello World 123!";
// let vowel = 0;
// let consonants = 0;
// for (const element of input.toLowerCase()) {
//     if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') vowel++;
//     else if (element >= 'a' && element <= 'z') { consonants++; }
// }
// console.log(vowel)
// console.log(consonants)



// q19
// let input= "jAVASCRIPT iS fUN"
// let arr=input.split(" ");
// let ans=[];

// for (let element of arr) {
//     element=element.toLowerCase()
//     element=element[0].toUpperCase().concat(element.slice(1,element.length))
//     console.log(element)
//     ans.push(element);
// }
// console.log(ans.join(" "))



// let input = "jAVASCRIPT iS fUN";

// let ans = input.split(" ").map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ");

// console.log(ans); 
// // Output: "Javascript Is Fun"



// q20
// let input=" Rahul Sharma ".trim();
// console.log(input.toLowerCase().split(" ").join("_")+" "+input.slice(input.length-2,input.length))


// gpt

// let input = "JavaScript";
// let len = input.length;
// let mid = Math.floor(len / 2);

// console.log("First character:", input[0]);
// console.log("Last character:", input[len - 1]);
// // Even length shows 2 middle chars, Odd length shows 1
// let midChars = (len % 2 === 0) ? input.slice(mid - 1, mid + 1) : input[mid]; 
// console.log("Middle character(s):", midChars);




// let input = "I love Java . Java is powerful.";
// // Option A: Modern JavaScript
// console.log(input.replaceAll("Java", "JavaScript"));

// // Option B: Regex approach (Universal)
// console.log(input.replace(/Java/g, "JavaScript"));



// let input = "I am learning JavaScript";
// let search = "learning";
// let index = input.indexOf(search);
// console.log(index !== -1 ? index : "Not Found");



// let input = "JS is easy. Learning JS is fun.";
// let search = "JS";

// console.log("First occurrence:", input.indexOf(search));
// console.log("Last occurrence:", input.lastIndexOf(search));



// let arr = ["Aman", "Riya", "Rahul"];
// console.log(arr.join(", ")); // Add a comma and a space



// let input = "Hello World 123!";
// let vowels = 0, consonants = 0;

// for (const char of input.toLowerCase()) {
//     if ('aeiou'.includes(char)) {
//         vowels++;
//     } else if (char >= 'a' && char <= 'z') {
//         consonants++;
//     }
// }
// console.log("Vowels:", vowels);
// console.log("Consonants:", consonants);



// let input = "programming";
// let target = "m";
// // Pro Tip: Split by the character and subtract 1 from the array length
// let count = input.split(target).length - 1;
// console.log(count); // 2



// let input = "JavaScript";
// console.log("slice():", input.slice(2, 6));       // vaSc
// console.log("substring():", input.substring(2, 6)); // vaSc


