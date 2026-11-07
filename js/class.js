// class Students{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     name = 'naval';
//     class = '12th Grade';         // class:12, in normal obj we st with : and end with , while here it st with = and end with ; but will use constructor here bcz for all obj which we made using this clss will have by default value this so we need to provide separte val as parameter to new obj
//     age = 22;

//      greet() {
//         console.log(`name is : ${this.name}`)
//         console.log(`age is : ${this.age}`)
//     }
// }

// let Student1=new Students('naval',22);
// Student1.greet()

 


// // Syntax of a Normal Object
// let regularStudent = {
//   name: 'naval',
//   age: 22,
  
//   greet() {
//     // You STILL need "this" here to access the properties!
//     console.log(`name is : ${this.name}`);
//     console.log(`age is : ${this.age}`);
//   }
// };

// // Accessing properties from the outside
// console.log(regularStudent.name); // 'naval'
// regularStudent.greet();

// 1. THE CLASS BLUEPRINT
// class Students {
//   // Creating properties outside the constructor
//   name = 'naval';
//   age = 22;

//   greet() {
//     // You STILL need "this" here just like a normal object!
//     console.log(`name is : ${this.name}`);
//     console.log(`age is : ${this.age}`);
//   }
// }

// // 2. CREATING THE CLASS OBJECT INSTANCE
// let classStudent = new Students();

// // Accessing properties from the outside
// console.log(classStudent.name); // 'naval'
// classStudent.greet();
let s=33;

class cars{
    color;
    name;
    #carno=656565;
    constructor(color,name){
        this.color=color;
        this.name=name;
    }

    password(){
        
        console.log(this.#carno)
    }


    greet(){
        console.log(`hi welcome to your ${this.name} whose color is ${this.color}`)
    }

    password(){
        console.log('hi fn overloading have same function property but diff parmeters here it is wtrong eg bro just for uunderstanding ')
    }
}

class speed extends cars{
    constructor(color,name,speed){

        super(color,name);
        this.speed=speed;

        console.log(`so speed is ${this.speed} of ${this.name}`)
    }
    greet(){
        console.log('hi i am subclass')        //fn overridding eg
    }
}

let car1=new speed('red','maruti',56)

car1.greet()
car1.password()



// car1.password()
// console.log(car1.color)
// console.log(car1.#carno)



