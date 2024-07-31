// let btn1 = document.querySelector("#btn1");
// btn1.onclick =() =>{
//     console.log("Button was clicked");
// };
// let div = document.querySelector("div");
// div.onmouseover =() =>{
//     console.log("You are inside div");
// };

//practice question
let btn1 = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
btn1.addEventListener("click", ()=>{
    if(currMode == "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});