// let x='  like java '
// console.log(x.trim())
// console.log(x.trim().length)
// console.log(x.trim().toLowerCase())
// console.log(x.trim().toUpperCase())
// console.log(x.includes('k'))
// console.log(x.trim().indexOf('k'))
// console.log(x.trim().substring(2,6))
// console.log(x.trim().concat(' hi i am adding'))


//q2
// let firstname='rahul'
// let lastname='mital'
// let city='ahmedabad'

// let fullname=firstname.concat(" ",lastname);

// console.log('full name is :',fullname)
// console.log(fullname.length)
// for (const element of fullname) {
//     console.log(element)
// }
// console.log(fullname.toLowerCase())
// console.log(fullname.toUpperCase())
// console.log(fullname.includes('mi'))
// console.log(fullname.indexOf('it'))
// console.log('first name is: ',fullname.substring(0,fullname.indexOf(' ')))


//q3

// let string ="JavaScript is easy to learn and JavaScript is powerful";
// console.log(string.length)
// console.log(string.includes('learn'))
// console.log(string.indexOf('powerful'))
// console.log(string.substring(string.indexOf('JavaScript'),string.indexOf('JavaScript')+10))
// console.log(string.replace('JavaScript','CPP'))


//q4

// let username = ' rah ul '
// let age = 55;
// let city = 'ahmeda$%bad'
// let course = 'mern'
// console.log('about ', username.replaceAll(" ", ''), username.replaceAll(" ", '').toLowerCase(), username.replaceAll(" ", '').toUpperCase(), username.replaceAll(" ", '').length, username.replaceAll(" ", '').includes('r'), username.replaceAll(" ", '').substring(2, 5), username.replaceAll(" ", '').concat(' added'))

// for (const element of city.toLowerCase()) {
//     if (!(element >= 'a' && element <= 'z' || (element >= 0 && element <= 9))) return console.log('contains special char plz remove it')

// };


//q5

// let array='ninja'
// let ans=''
// for (let index = array.length-1; index >=0; index--) {
//     ans = ans+array[index];


// }
// console.log(ans)


//modern method of swap in js
// let a=1;
// let b=2;
// [a,b]=[b,a]
// console.log(a)


//q7 char freq

// let string='JavaScript'
// let char='a';

// let counta=[...string.matchAll('a')].length
// console.log(counta)

// let usingsplit=string.split('a')
// console.log(usingsplit.length-1)


//q8
// let sen = 'i lovedddd india'
// let ar = sen.split(' ');
// let max = 0;
// let maxword = '';
// for (const element in ar) {
//     // console.log(ar[element].length)
//     if (ar[element].length > max) {

//         max = ar[element].length;
//         maxword = ar[element];

//     }

// }
// console.log(maxword)


// let sen = 'i lovedddd india';
// let longest = sen.split(' ').reduce((a, b) => a.length > b.length ? a : b);

// console.log(longest); // Outputs: lovedddd



//q9
// let sen='  i     love      js  ';
// // console.log(sen.trim().split(" "))
// let ans=sen.trim().split(' ').filter((x)=>x!="").length
// console.log(ans)


//q10
// let pal='madaM'
// console.log((pal.toLowerCase()===pal.toLowerCase().split("").reverse().join(""))? 'true':'false')



//q11
// let str = 'programming';
// let duprem = '';
// for (const element of str) {
//     if (!duprem.includes(element)) {
//         duprem = duprem + element;
//     }
// }
// console.log(duprem)


//q12
// let str = 'programming'.split("")
// let ans = str.reduce((acc, currentval) => {
//     if (acc[currentval]) {
//         acc[currentval] = acc[currentval] + 1;
//     }
//     else {
//         acc[currentval] = 1;
//     }
//     return acc;
// }, {})


// let max = 0;
// let maxword = '';
// for (const key in ans) {

//     if (ans[key] >= max) {
//         max = ans[key];
//         maxword = key;
//     }

// }
// console.log('so over max time coming char is : ', maxword)

// for (const key in ans) {
//     // console.log(key)
//     if (ans[key] === 1) return console.log(key);

// }
// console.log('no such val founds')
// console.log(ans)


//15
// let pass = '123456Ay'
// if (pass.length < 8) return console.log('length must be greater then 7')

// let count1 = 0, count2 = 0, count3 = 0;

// for (const element of pass.split('')) {
//     if (element === ' ') {
//         return console.log('not satisfied (contains spaces)');
//     }
//     if (element >= 'a' && element <= 'z') {
//         count1++;
//         continue;
//     }
//     if (element >= 'A' && element <= 'Z') {
//         count2++;
//         continue;
//     }

//     // if (Number(element) >= 0 && Number(element)<= 9) {
//     //     count3++;
//     //   continue;
//     // }

//     if (element >= '0' && element <= '9') {
//         count3++;
//         continue;
//     }
// }

// console.log(count3)

// if (!count1 || !count2 || !count3) {
//     console.log('not satisfied')
// }


//q16

// let student={
//     name:'naval',
//     age:22,
//     course:'mern',
//     city:'ahmedabad',
//     marks:80
// }

// // console.log(student.name,student.age,student.course,student.city,student.marks)

// console.log(student['name'],student['age'],student['city'],student['course'],student['marks'])


//q17


// let student={
//     name:'samsung',
//     price:22,
//     category:'mobile',
//     stock:5,
// }
// student['discount']=10;
// student.price=100
// student.stock=2
// delete student.category
// console.log(student)


//q18
// let employee = {
//     name: 'naval',
//     postion: 'head',
//     salary: 45000,
//     dob: '01/02/2001'
// }

// console.log(Object.keys(employee))
// console.log(Object.values(employee).length
// )
// console.log(Object.values(employee)
// )
// console.log(Object.entries(employee))

//19



// • Object.entries() → Converts an Object into an Array
// • Object.fromEntries() → Converts an Array back into an Object

// const inventory = { apples: 20, bananas: 80, cherries: 15, dates: 120 };

// // 1. Convert to array, 2. Filter the pairs, 3. Convert back to object
// const highStock = Object.fromEntries(
//   Object.entries(inventory).filter(([key, value]) => value >= 50)
// );

// console.log(highStock);
// // Output: { bananas: 80, dates: 120 }

// let marks={
//     name:'naval',
//     maths:80,
//     eng:85,
//     hindi:85,
//     science:89
// }

// console.log(Object.hasOwn(marks,'hindi'))
// console.log(marks.eng===66)


//20

let marks={
    maths:80,
    eng:85,
    hindi:85,
    science:89,
    sst:88
}

console.log(Object.values(marks))

// let markssum=0;
// for (const key in marks) {
    
//     markssum=markssum+marks[key];
    
// }

// console.log(markssum)

let totalmarks=Object.entries(marks).flat(Infinity).filter((x)=>typeof(x)==='number').reduce((acc,val)=>acc+val)

console.log('total marks :',totalmarks)

console.log('avg :',totalmarks/Object.keys(marks).length)



// console.log(Object.entries(marks).flat(Infinity).filter((x)=>typeof(x)==='number').reduce((acc,val)=>{
//     acc=acc+val;
//     return acc
// }))

let maxmarks=0;
let ans=Object.entries(marks).flat(Infinity).filter((x)=>typeof(x)==='number').forEach((x)=>{
    if(x>maxmarks) maxmarks=x;
})

console.log('max marks :',maxmarks)

let min=maxmarks;

let minmarks=Object.entries(marks).flat(Infinity).filter((x)=>typeof(x)==='number').forEach((x)=>{
    if(x<min) min=x;
})

console.log('min marks :',min)



