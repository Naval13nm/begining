// let url = "https://dummyjson.com/users";
// function callback(url, error) {
//     fetch(url)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('error occured');
//             }
//             console.log(res)
//         })
//         .catch((err) => {
//             error()
//             console.log(err.message)
//         })
// }


// function error() {
//     console.log('err')
// }
// callback(url, error)
// function res(){
//     console.log('res')
// }




// const url = "https://dummyjson.com/users1";

// function callApi(url, handleError){
//     fetch(url)
//             .then((res)=>{
//                 if(!res.ok){
//                     throw new Error("Error in res")
//                 }
//                 console.log(res);
//             })

//             .catch((err)=>{
//                 handleError();
//             })
// }

// function handleError(){
//     // Fallback Mechanism
//     console.log("Error in fetching data");
// }

// callApi(url, handleError)


//promise

// let no = 10;

// //prmoise always takes two parameters resolve and reject and created using new 
// const prom1 = new Promise((resolve, reject) => {

//     // console.log(prom1)

//     if (no % 2 == 0) {
//         resolve('success')  //we cll resolve where we want over event to succes 
//     } else {
//         reject(new Error('error'))  //where we want event to fail
//     }
// })
// //once over event either get fails it will run catch and if it is sucess then runs then

// //we use set time out to see promise st stage that is pending  but we cant see this here in this terminal we can see it on browser

// setTimeout(() => {
//     prom1
//         .then((mess) => {
//             console.log(mess)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }, 1000)
// console.log(prom1)


let url = 'https://dummyjson.com/userss';

function api(url) {
    let promise = new Promise((resolve, reject) => {

        //old way

        // fetch(url).then((Response) => {
        //     if (!Response.ok) { throw new Error('Error') }
        //     console.log(Response)
        // }).catch((Response) => console.log(Response))


        //here we have not used resolve and reject parameters now we will do this using those parameters when we use it then we need to declare then and catch inside that promise block 

        fetch(url).then((Response) => {
            if (!Response.ok) throw new Error('error')
            resolve(Response);
            // console.log(Response)
        }).catch((Error) => {
            reject(Error);
            // console.log(Error)
        })
    })


    promise.then((result) => {
        console.log(result)
    }).catch((error) => {
        //fallback mechansim
        console.log(error)
    })
}


api(url)