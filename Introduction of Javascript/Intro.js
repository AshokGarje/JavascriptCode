/*console.log("I am Ashok")
console.log("I recently started my javascript journey.")
console.log("I love Javascript.")
*/
// name = "Ashok Garje";
// console.log(name);

// mode = "bright";
// let color;

// if(mode == "dark"){
//     color = "black";
// }
// else{
//     color = "white"
// }

// console.log(color);
// Number = prompt("Enter a Number: ");
// Number % 5 == 0 ? console.log("Number devide by 5") : console.log("Number not devide by 5.");
// alert("Hello Ashok")

//for loop
// sum = 0;
// for(let i =1; i<=5;i++){
//     console.log("I believe myself.");
//     sum = sum  + i;
// }
// console.log(sum);

//while loop
// let i = 0 ;
// while(i<=5){
//     console.log("Hello");
//     i++;
// }

//do while loop
// let i =20;
// do{
//     console.log("Hello");
//     i++;
// }while(i<=10);

// for of loop
// str = "Ashok Garje"
// for(let i of str){
//     console.log("i=",i);
// }
//use for string and array

//for in loop
//use for object
// let student = {
//     name : "Ashok",
//     age : 21,
//     cgpa : 9.0,
//     isPass : true,
// };
// //console.log(student['name']);
// for(let i in student){
//     console.log(i);
// }

// for(let i=0;i<=100;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }

//String
// let str = "Congratulations Ashok";
// console.log(str.length);
// console.log(str[3]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim()); // remove whitespaces
// console.log(str.slice(2, 5));//slice the section of string
// let str2 = " You are selected as intern at Google for 6 months";
// console.log(str.concat(str2));
// console.log(str.replace("Ashok", "Suraj"));

// let fullName = prompt("Enter Your full name: ");
// len = name.length;
// console.log("Your default user name is @" + fullName + len);

//Arrays
let marks =  [97,92,87,88,95,90];
// console.log(marks);
// console.log(marks.length);
let heros = ["Akshay","Ritesh","Makarand","Ashok","Johnson"];
// console.log(heros);
// heros[2] = "Ranveer";
// console.log(heros);

// let sum =0;
// for(let i=0;i<marks.length;i++){
//    sum = sum + marks[i]; 
// }
// let avg = sum/marks.length;
// console.log(avg);

// let price = [250,645,300,900,50];
// for(let i =0;i<price.length;i++){
//     price[i] = price[i] - (price[i] * (10/100));
// }
// console.log(price);

// heros.push("Prabhas");
// console.log(heros);
// heros.pop();
// console.log(heros);

// heross = heros.toString(); //convert array into string
// console.log(heross);

// let heross = heros.concat(marks); //concat two arrays.
// console.log(heross);

// heros.unshift("Ritik"); //add element at begin of an array
// console.log(heros);

// heros.shift(); // //remove element from begin of array.

// console.log(heros.slice(1,3));
// console.log(heros.splice(1,2,"Ajay","Sunil")); //change to original array add, remove, replace
// console.log(heros);
// //add element
// console.log(heros.splice(0,1,"Deepika"));
// console.log(heros);

// //Delete Element
// console.log(heros.splice(0,1));
// console.log(heros);

// //replace element
// console.log(heros.splice(1,1,"Satish"));
// console.log(heros);

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(company);

// company.shift();
// console.log(company);

// company.splice(1,1,"Ola");
// console.log(company);

// company.push("Amazon");
// console.log(company);


//function
//Arrow function
// const arrowfun = (a, b) =>{
//     return(a + b);
// }
// console.log(arrowfun(3,5));

// function vowelsCount(s){
//     let count = 0;
//     for(let i =0;i<s.length;i++){
//         if (s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U" || 
//             s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u"){
//                 count++;
//         }
//     }
//     return count;
// }
// console.log(vowelsCount("AshokBaluGarjE"));

//Method
// company.forEach((val) => {
//     console.log(val);
// })

//forEach method
let numbers = [1,2,3,4,5,6,7,8,9];
// numbers.forEach((val) => {
//     console.log(val * val); 
// })

//map method //use to create new array
// let squreOfNumber = numbers.map((val) =>{
//     return val*2;
// })
// console.log(squreOfNumber);

//filter method //Create a new array of elements that give true for a condition
// let newArray = numbers.filter((val) =>{
//     return val%2 == 0;
// })
// console.log(newArray);
// console.log(numbers);

//Reduce method //perform some operation and reduce array to single value
// let mxElement = numbers.reduce((prev, curr) =>{
//     return prev > curr ? prev : curr;
// })
// console.log(mxElement);

// let avg = numbers.reduce((prev, curr) =>{
//     let sum = prev + curr;
//     return sum/2;
// })
// console.log(avg);