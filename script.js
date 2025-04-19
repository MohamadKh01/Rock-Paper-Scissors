let compChoice;
let humanChoice;

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

}