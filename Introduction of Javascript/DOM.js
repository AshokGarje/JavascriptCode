// let first = document.getElementById("myId");
// console.dir(first);

// let myclass = document.getElementsByClassName("myClass");
// console.dir(myclass);

// let paragraph = document.getElementsByTagName("p");
// console.log(paragraph);

// let element = document.querySelector("p"); //Accessing first element
// console.log(element);

// let element2 = document.querySelectorAll("p"); //Accessing All element
// console.dir(element2);

// let element3 = document.querySelectorAll(".myClass"); //Accessing All element
// console.dir(element3);

// console.log(first.tagName);

// for innertext property
// let div = document.querySelector("div");
// console.dir(div.innerText);
// console.dir(div.innerHTML);

//practice question
// let myId = document.getElementById("myId");
// myId.textContent += " from Apna College students";
// myId.innerHTML += "<h2>  from Apna College students</h2>";

// let divs = document.querySelectorAll(".box");
// console.dir(divs);
// divs[0].innerText = "New unique value 1"

//getAttributes
// let divid = document.querySelector("div");
// console.log(divid.getAttribute("id"));

// let divclass = document.querySelector("div");
// console.log(divclass.getAttribute("class"));

// //setAttribute
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// //style
// let div = document.querySelector("div");
// div.style.backgroundColor = "red";

//insert Element
// let newBtn = document.createElement("button");
// newBtn.innerText = "clickMe!";
// console.log(newBtn);

// let div = document.querySelector("div");
//div.append(newBtn);
//div.prepend(newBtn);// add at the start of the node(inside)
//div.before(newBtn); //add just before the node 
//div.after(newBtn); //add just after the node

// let newHeading = document.createElement("h2")
// newHeading.innerText = "This is h2 type heading";
// console.log(newHeading);

// let p = document.querySelector("p");
// p.append(newHeading);

// p.remove(); //delete the element


//practice question
let newBtn = document.createElement("button");
newBtn.innerHTML = "<i>click me!</i>";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
 
let body = document.querySelector("body");
body.prepend(newBtn);

