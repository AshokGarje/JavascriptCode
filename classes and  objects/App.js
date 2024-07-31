//Object
// const student ={
//     fullName : "Ashok Garje",
//     marks : 93.56,
//     printMarks : function(){
//         console.log("Marks: ", this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const KaranArjun ={
//     salary : 50000,
//     calcTax(){
//         console.log("Tax rate is 20%");
//     },
// };
// KaranArjun.__proto__ = employee; //what is prototype?

//if object and prototype have same method, object method will be used.

//Class and Constructor
// class ToyotoCar{
//     // constructor(){
//     //     console.log("creating new object");
//     // }
//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("Stop");
//     }
// };

// let fortuner = new  ToyotoCar();

//Inheritance
// class person{
//     constructor(species){
//         this.species = species;
//         console.log("species: ",species);
//     }
//     eat(){
//         console.log("Eat");
//     }

//     sleep(){
//         console.log("Sleep");
//     }

//     work(){
//         console.log("Do work");
//     }
// };

// class Engineer extends person {
//     constructor(branch){
//         super("homo species"); // invoke the parent class constructor
//         this.branch = branch;
//         console.log("Branch: ", branch);
//     }
//     work(){
//         console.log("solve problems, build new things"); //function overriding
//     }
// };

// let ashok = new Engineer("computer");


