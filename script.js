let compChoice;


function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    switch (x){
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
            break;
        default:
            compChoice = "Error";
    }

    return compChoice;
}