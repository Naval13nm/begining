// const numbers = [10, 20, 10, 30, 40, 20, 50, 30];
// const ans=[];

// for(x of numbers){
//     if(!ans.includes(x)) ans.push(x);
// }


// console.log(ans)



// const numbers = [12, 7, 18, 25, 30, 41, 56, 63, 72];


// function evenodd(numbers){
//     const obj ={}
//     obj.even= numbers.filter(x=>x%2==0);
//     obj.odd= numbers.filter(x=>x%2!=0);
//     console.log(obj)
// }

// evenodd(numbers)



// const numbers = [455, 12, 78, 45, 90, 67, 90, 34];

// let a=-Infinity;
// let b=a;

// for(let no of numbers){
//     if(no>a) {
//         b=a;
//         a=no;
//     }

//     else if(no<a && no>b){
//         b=no;
//     }

//     }

//     console.log(b)



// const numbers = [10, 20, 30, 40, 50, 60];
// const add=numbers.slice(0,2)
// console.log(add)
// numbers.splice(0,2)
// console.log(numbers)
// numbers.push(...add)
// console.log(numbers)


// const arr1 = [10, 20, 30, 40, 20, 50];
// const arr2 = [20, 40, 60, 20, 70];
// let arr = [];



// let i = Math.min(arr1.length - 1, arr2.length - 1);

// while (i >= 0) {
//     if (arr2.includes(arr1[i])) {
//         if (!arr.includes(arr1[i])) arr.push(arr1[i]);

//     }
//     i--;
// }

// console.log(arr)


// const products = [
//  { id: 1, name: "Keyboard", price: 1000 },
//  { id: 2, name: "Mouse", price: 500 },
//  { id: 3, name: "Monitor", price: 8000 },
//  { id: 4, name: "Headphones", price: 1500 }
// ];

// let ans = products.map((x) => {
//   return { ...x, price: x.price+x.price * 10/100 };
// });

// console.log(ans)


// Find students who scored at least 60 marks and calculate their average marks.

// const students = [
//   { name: "Aman", marks: 75 },
//   { name: "Riya", marks: 45 },
//   { name: "Karan", marks: 85 },
//   { name: "Neha", marks: 55 },
//   { name: "Simran", marks: 65 }
// ];

// Use filter(), map(), and reduce()

// let total = 0;
// let marks = students.filter((x) => {
//  return x.marks >= 60
// });

// for (let x of marks) {
//     total = total + x.marks;
// }

// let mark=marks.map(x=>x.marks);


// let sum=mark.reduce((x,y)=>x+y)

// console.log(sum/mark.length)
// console.log(total/marks.length)



// const cart = [
//  { name: "Book", price: 200, quantity: 3 },
//  { name: "Pen", price: 20, quantity: 5 },
//  { name: "Bag", price: 800, quantity: 2 },
//  { name: "Bottle", price: 150, quantity: 4 }
// ];

// let newarr=cart.map((x)=>{
//     return x.price*x.quantity
// })

// let total=newarr.reduce((first,second)=>first+second);
// console.log(total)


// const employees = [
//  { id: 101, name: "Aman", salary: 25000 },
//  { id: 102, name: "Riya", salary: 30000 },
//  { id: 103, name: "Karan", salary: 35000 },
//  { id: 104, name: "Neha", salary: 28000 }
// ];


//find function  Find the specific employee object

// let index=employees.findIndex((x)=>{                        
//  return x.id==103
// })
// console.log(index)

// let chngvalobj=employees.filter((x)=>{
//   return x.id==103;
// })

// chngvalobj[0].salary=chngvalobj[0].salary+5000;

// console.log(chngvalobj)

// employees.splice(index,1,...chngvalobj);

// console.log(employees)







// let incre=employees.filter((x)=>{
//   return x.id==103

// })

// incre.salary=incre.salary+5000;

// let ans=employees.filter((x)=>{
//   return x.id !=103
// })

// let tt=[...ans,...incre];
// console.log(tt)




// const numbers = [45, 12, 89, 34, 67, 23, 89, 56];

// . Sort the numbers in ascending order.
// 2. Sort the numbers in descending order.
// 3. Find the index of 67 using indexOf().
// 4. Check whether 100 exists using includes().
// 5. Remove the first occurrence of 89 using indexOf() and splice().



// console.log(numbers.sort());     //sort in ascending order
// console.log(numbers.sort((A,B)=>A-B));   //sort in ascending order
// console.log(numbers.reverse())   //sort in descending order
// console.log(numbers.sort((A,B)=>B-A));  //sort in descending order

// console.log(numbers.indexOf(67))

// console.log(numbers.includes(100))

// numbers.splice(numbers.indexOf(89),1)

// console.log(numbers)




// const employees = [
//   { name: "Aman", salary: 25000 },
//   { name: "Riya", salary: 40000 },
//   { name: "Karan", salary: 35000 },
//   { name: "Neha", salary: 28000 },
//   { name: "Simran", salary: 50000 }
// ];


// let thirtysal=employees.filter((x)=>x.salary>=30000);
// console.log(thirtysal)


// let kharcha=0;
// let total=employees.map((x)=>{
//   kharcha=x.salary+kharcha;
// })
// console.log(kharcha)

// let sal=employees.map((x)=>x.salary);
// console.log(sal)
// console.log(Math.max(...sal))

// let name=employees.map((x)=>x.name);
// console.log(name)



// const products = [
//  { name: "Laptop", category: "Electronics" },
//  { name: "Mouse", category: "Electronics" },
//  { name: "Chair", category: "Furniture" },
//  { name: "Table", category: "Furniture" },
//  { name: "Phone", category: "Electronics" }
// ];

// let elec=products.filter((x)=>x.category=="Electronics")
// let elecname=elec.map((x)=>x.name);
// let furniture=products.filter((x)=>x.category=="Furniture")
// let furname=furniture.map((x)=>x.name);
// console.log({Electronics:elecname,Furniture:furname})
// console.log(elec)






// const students = [
//   { id: 101, name: "Aman" },
//   { id: 102, name: "Riya" },
//   { id: 103, name: "Karan" },
//   { id: 101, name: "Neha" },
//   { id: 104, name: "Simran" },
//   { id: 102, name: "Rahul" }
// ];

// let idarr = students.map((x) => x.id).sort();
// console.log(idarr)

// let unique = [];
// let dupli = [];

// for (const element of idarr) {
//   if (!unique.includes(element)) unique.push(element);
//   else dupli.push(element);
// }

// console.log(dupli)



// Convert the following array into a JSON string, parse it back into an array, and display students scoring above 70.

// const students = [
//  { id: 1, name: "Aman", marks: 78 },
//  { id: 2, name: "Riya", marks: 85 },
//  { id: 3, name: "Karan", marks: 65 }
// ];

// let jso=JSON.stringify(students)
// console.log(jso)

// let back=JSON.parse(jso)
// console.log(back)

// console.log(students.filter((x)=>x.marks>70));








// const jsonData = `[
//  {"id": 1, "name": "Laptop", "price": 55000},
//  {"id": 2, "name": "Mouse", "price": 600},
//  {"id": 3, "name": "Keyboard", "price": 1200},
//  {"id": 4, "name": "Monitor", "price": 15000},
//  {"id": 5, "name": "Headphones", "price": 2000}
// ]`;


// let par=JSON.parse(jsonData);
// console.log(par)

// console.log(par.filter((x=>x.price>1000)))

// let price=par.map((x)=>x.price)
// let total=price.reduce((a,b)=>a+b)
// console.log(total)

// console.log(Math.max(...price));

// console.log(JSON.stringify(par))




// let cart = ["Laptop", "Mouse", "Keyboard", "Mouse", "Monitor"];

// cart.push('headphone')
// cart.unshift('webcam')
// cart.shift()
// cart.pop()
// console.log(cart.indexOf('Mouse'))
// console.log(cart.length)
// console.log(cart)


// const sales = [
//  { product: "Laptop", amount: 50000 },
//  { product: "Mouse", amount: 1000 },
//  { product: "Keyboard", amount: 2500 },
//  { product: "Laptop", amount: 50000 },
//  { product: "Mouse", amount: 1500 },
//  { product: "Monitor", amount: 20000 }
// ];

// let amount=sales.map((x)=>x.amount)
// let sum=amount.reduce((x,y)=>x+y)
// console.log(sum)
// console.log(sales.filter((x)=>x.amount>10000))


// let name='java';

// function obj(name){
//   let obj={}
//   for (const element of name) {
//     if(obj[element]) obj[element]++;
//     else obj[element]=1;
//   }
//   console.log(obj)
// }

// obj(name)


const obj1 = {
 name: "Aman",
 age: 22,
 city: "Jaipur"
};
const obj2 = {
 age: 23,
 profession: "Developer",
 city: "Delhi"
};

const obj3={...obj1,...obj2}
console.log(obj3)