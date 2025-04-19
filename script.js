let compChoice;
let humanChoice;
let humanScore = 0;
let compScore = 0;


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
