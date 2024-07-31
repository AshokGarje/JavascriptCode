let userScore =0;
let compScore =0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner = ((userWin, userChoice, compChoice) =>{
    userWin ? console.log("You win") : console.log("You loss");
    // userWin ? msg.innerText = "You win!"  : msg.innerText = "Computer Win!";
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loss ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
})

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game Draw, play again!";
    msg.style.backgroundColor = "#081b31";
}
const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const playGame = ((userChoice) =>{
    console.log("User Choice = ", userChoice);
    //computer choice
    const compChoice = genComputerChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice == compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissors, paper
            userWin = compChoice == "paper" ? false : true;
        } 
        else if(userChoice =="paper"){
            //rock, scissors
            userWin = compChoice == "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
});

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
});
