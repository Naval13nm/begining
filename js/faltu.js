// let inventory = [
//     { id: 101, name: "Pen", stock: 20 },
//     { id: 102, name: "Notebook", stock: 10 },
//     { id: 103, name: "Marker", stock: 5 }
// ];

// let updates = [
//     { id: 102, quantity: 8 },
//     { id: 101, quantity: -5 },
//     { id: 104, quantity: 12 },
//     { id: 103, quantity: -8 },
//     { id: 102, quantity: -3 }
// ];

// let newinventory = inventory.map((x) => x)
// // console.log(newinventory)

// for (const obj of updates) {
//     let productcheck = newinventory.find((x) => x.id == obj.id);

//     if (productcheck) {
//         let newstock = obj.quantity + productcheck.stock;
//         if (newstock >= 0) productcheck.stock = newstock;
//     }

//     else {
//         if (obj.quantity >= 0) {
//             newinventory.push
//                 (
//                     {

//                         id: obj.id,
//                         name: "new product",
//                         stock: obj.quantity
//                     }
//                 )
//         }
//     }

// }

// console.log(newinventory)

const users = [
    { id: "u1", name: "Alice", points: 50 },
    { id: "u2", name: "Bob", points: 20 }
];

const transactions = [
    { id: "u2", points: 15 },    // Bob gains 15
    { id: "u1", points: -60 },   // Alice loses 60 (Illegal! Should be ignored)
    { id: "u3", points: 30 },    // New User u3 joins
    { id: "u2", points: -10 }    // Bob loses 10
];

let newusers=users.map((x)=>{
    return {...x}
})
// newusers[0].id=555;
// console.log(newusers)
// console.log(users)

for (const obj of transactions) {
    let findobj=newusers.find((x)=>x.id==obj.id)
    if(findobj){
        let totalpoints=obj.points+findobj.points;
        if(totalpoints>=0){
            findobj.points=totalpoints;
        }
    }
    else{
        if(obj.points>=0){
            newusers.push({
                id:obj.id,
                name:"new player",
                points:obj.points
            })
        }
    }
}

console.log(newusers)
console.log(users)