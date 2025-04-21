let compChoice;
let humanChoice;
let humanScore = 0;
let compScore = 0;
let round = 0;

const Rock = 0;
const Paper = 1;
const Scissors = 2;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    switch (x){
        case 0:
            compChoice = Rock;
            break;
        case 1:
            compChoice = Paper;
            break;
        case 2:
            compChoice = Scissors;
            break;
    }

    return compChoice;
}

/* //get human choice by prompt
function getHumanChoice(){
    let str = prompt("Rock? Paper? Scissors?");
    str = str.toLowerCase();

    switch(str){
        case "rock":
            humanChoice = Rock;
            break;
        case "paper":
            humanChoice = Paper;
            break;
        case "scissors":
            humanChoice = Scissors;
            break;
        default:
            humanChoice = Rock;
            break;
    }

    return humanChoice;
}
*/

function playRound(humanChoice, compChoice){
    if(compChoice == Rock){
        if(humanChoice == Rock){
            console.log("it's a tie!! play again!");
        }
        else if(humanChoice == Paper){
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
        else if(humanChoice == Scissors){
            console.log("You lose! Rock beats Scissors!");
            compScore++;
        }
    }
    else if(compChoice == Paper){
        if(humanChoice == Rock){
            console.log("You lose! Paper beats Rock!");
            compScore++;
        }
        else if(humanChoice == Paper){
            console.log("it's a tie!! play again!");
        }
        else if(humanChoice == Scissors){
            console.log("You win! scissors beat Paper!");
            humanScore++;
        }
    }
    else if(compChoice == Scissors){
        if(humanChoice == Rock){
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        }
        else if(humanChoice == Paper){
            console.log("You lose! Scissors beat Paper!");
            compScore++;
        }
        else if(humanChoice == Scissors){
            console.log("It's a tie!! play again!");
        }
    }
}

/* loop the gane for 5 rounds then declare the winner
function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        alert("human score: " + humanScore + "  vs  computer score:" + compScore);
    }
    if(compScore > humanScore){
        console.log("you lose");
    }
    else if(compScore < humanScore){
        console.log("you win");
    }
    else{
        console.log("it's a tie");
    }
}
*/

function newGame(){
    humanScore = 0;
    compScore = 0;
    round = 0;
}