// function processOrders(orders) {
//     let deliveredamount = 0;
//     let delivered = 0;
//     let pending = 0;
//     let cancelled = 0;
//     let pendingamount = 0

//     for (const x of orders) {

//         if (x.status == 'delivered') {
//             if (x.amount < 500) {
//                 deliveredamount = deliveredamount + x.amount + 50;
//             }
//             else if (x.amount < 1500) {
//                 deliveredamount = deliveredamount + x.amount + 30;
//             }
//             else {
//                 deliveredamount = deliveredamount + x.amount;
//             }
//             delivered++;
//         }
//         else if (x.status == 'pending') {

//             if (x.amount < 500) {
//                 pendingamount = pendingamount + x.amount + 50;
//             }
//             else if (x.amount < 1500) {
//                 pendingamount = pendingamount + x.amount + 30;
//             }
//             else {
//                 pendingamount = pendingamount + x.amount;
//             }
//             pending++;
//         }
//         else {
//             cancelled++;
//         }

//     }

//     let highvalueproductsobj = orders.filter((x) => x.amount > 1000);
//     let highvalueproductsid = highvalueproductsobj.map((x) => x.id)


//     let statuscount = {
//         delivered: delivered,
//         pending: pending,
//         cancelled: cancelled
//     }


//     let ans = {
//         deliveredRevenue: deliveredamount,
//         pendingAmount: pendingamount,
//         highValueOrderIds: highvalueproductsid,
//         statusCount: statuscount
//     }

//     console.log(ans)

// }

// let orders = [
//     { id: 101, amount: 1500, status: "delivered" },
//     { id: 102, amount: 800, status: "pending" },
//     { id: 103, amount: 2500, status: "cancelled" },
//     { id: 104, amount: 400, status: "delivered" },
//     { id: 105, amount: 1800, status: "pending" },
//     { id: 106, amount: 1200, status: "delivered" }
// ];


// processOrders(orders);


let inventory = [
    { id: 101, name: "Pen", stock: 20 },
    { id: 102, name: "Notebook", stock: 10 },
    { id: 103, name: "Marker", stock: 5 }
];

let updates = [
    { id: 102, quantity: 8 },
    { id: 101, quantity: -5 },
    { id: 104, quantity: 12 },
    { id: 103, quantity: -8 },
    { id: 102, quantity: -3 }
];



function reconcileInventory(inventory, updates) {
    let newInventory = inventory.map(x => ({ ...x }));

    for (const y of updates) {
        let product = newInventory.find(x => x.id === y.id);

        if (product) {
            let newStock = product.stock + y.quantity;

            if (newStock >= 0) {
                product.stock = newStock;
            }
        } else {
            if (y.quantity >= 0) {
                newInventory.push({
                    id: y.id,
                    name: "New Product",
                    stock: y.quantity
                });
            }
        }
    }

    let totalStock = 0;
    let lowStockIds = [];

    for (const x of newInventory) {
        totalStock += x.stock;

        if (x.stock < 10) {
            lowStockIds.push(x.id);
        }
    }

    return {
        inventory: newInventory,
        totalStock,
        lowStockIds
    };
}

console.log(reconcileInventory(inventory, updates));
