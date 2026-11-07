// let variable='   hellocvd  '  
// console.log(variable.trim())
// console.log(variable.trim().length)
// console.log(variable.trim().toLowerCase())
// console.log(variable.trim().toUpperCase())
// console.log(variable.includes('el'))
// console.log(variable.indexOf('el'))
// console.log(variable.substring(6,9))
// console.log(variable.concat(variable.substring(5,9)))


//q2

// let firstname='rahul';
// let lastname='sharma';
// let city='delhi';

// function details(firstname,lastname,city){
//     console.log(firstname+lastname);
//     console.log((firstname+lastname).length);
//     console.log((firstname+lastname).toLowerCase());
//     console.log((firstname+lastname).toUpperCase());
//     console.log((firstname+lastname).includes('hulsh'));
//     console.log((firstname+lastname).indexOf('hulsh'));
//     console.log((firstname+lastname).substring(4,11));

// }
// details(firstname,lastname,city)

//q3

// let variable="JavaScript is easy to learn and JavaScript is powerful";
// console.log(variable.length)
// console.log(variable.includes('learn'))
// console.log(variable.indexOf('powerful'));
// [console.log(variable.replace('JavaScript','NEWword'))]

//q4

// let username='  rahul  ', age=21, city='delhi', course='BCA';


// console.log(username.trim())
// console.log(username.trim().toLowerCase())
// console.log(username.trim().toUpperCase())
// console.log(username.trim().length)
// console.log(username.trim().includes('ul'))
// console.log(username.trim().substring(2,6))
// console.log(username.trim().concat(` lives in ${age}`))


//q5


// let string = 'reverse';
// let ans='';

// for (let index = string.length - 1; index >= 0; index--) {
//     ans=ans+string[index];

// }
// console.log(ans)

//q6


// let string='  7006$%aEiouqW ';
// let vowel=0;
// let consonant=0;

// for (const element of string.toLowerCase()) {
//     if(element>='a'&& element<='z'){
//         if(element=='a'||element=='e'||element=='i'||element=='o'||element=='u'){
//             vowel++;
//         }
//         else{
//             consonant++;
//         }
//     }

// }

// console.log(vowel)
// console.log(consonant)



//7


// let string='hello javascript hello';
// let char='a';
// let count=0;

// for (const element of string) {
//  if(element===char) count++;   
// }

// console.log(`so ${char} repeats ${count}`)


//q 8

// let string='hello javascript hello';
// let arr=string.split(" ");
// let acc=0;
// let final;
// arr.forEach((x)=>{
//     if(acc<x.length){
//         acc=x.length;
//         final=x;
//     }


// })
// console.log(final);
// console.log(final.length);

// q9


// let string='i love    js '
// let count=0;

// let ans=string.split(' ');
// console.log(ans)
// ans.forEach(x => {
//     if(x!=''){count++;}
// });

// console.log(count)

//q10

// let pal='madaM';
// let rev='';
// for(let x=pal.length-1; x>=0; x--){
//     rev=pal[x]+rev;
// }
// if(rev===pal) console.log('palindrome')
//     else console.log('not pal')

//11

// let str='programming';
// let New='';
// str.split('').forEach(element => {
//     if(!New.includes(element)) New=New+element;
// });
// console.log(New)


//q12

// let str=' Lower Ca se@123% '
// let spaces=0, uppercase=0,lowercase=0,specialchar=0,digits=0;
// for (const element of str) {
//     if(element==' ') spaces++;
//     else if(element>='a' && element<='z') lowercase++;
//     else if(element>='A' && element<='Z') uppercase++;
//     else if(element>=0 && element<=9) digits++;
//     else specialchar++;

// }

// console.log(spaces,lowercase,uppercase,specialchar)


//q13

// let str='aaavvev'

// let arr=str.split('');

// for (const element of str) {
//     let st=str.indexOf(element);
//     let count=0;

//     for (let index = st+1; index < arr.length; index++) {
//         if(arr[index]===element) count++;

//     }

//     if(count===0) return console.log(element);
//     else count=0;
// }

// console.log('no element')

//q16
// let pass = 'Abddedes';
// let digitcount = 0, uppercasecount = 0, lowercasecount = 0;

// if (pass.length < 8) return console.log('length is less then 8');

// for (const element of pass) {
//     if (element == ' ') return console.log('have spaces');
//     else if (element >= 'a' && element <= 'z') lowercasecount++;
//     else if (element >= 'A' && element <= 'Z') uppercasecount++;
//     else if (element >= '0' && element <= '9') digitcount++;
// }

// if (digitcount == 0) return console.log('doesnt contains digits')
// else if (uppercasecount < 0) return console.log('doesnt contains uppercount')
// else if (lowercasecount < 0) return console.log('doesnt contains lower value');
// else console.log('perfect pass')



//q17






function sandwich(numberOfUnits) {
    console.log("Sandwich delivered")
    return numberOfUnits * 70;
}

function coffee(numberOfUnits) {
    console.log("Coffee delivered")
    return numberOfUnits * 120;
}

function dimsum(numberOfUnits) {
    console.log("Dimsum delivered")
    return numberOfUnits * 180;
}

function billSummary(a, b, c) {
    console.log(sandwich(a) + coffee(b) + dimsum(c))
}

billSummary(sandwich(2), coffee(2), dimsum(2))