let options = ["Rock", "Paper", "Scissors"]

function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection === "ROCK"){
        if(computerSelection === "ROCK"){
            return "You tied! Rock ties with rock";
        }
        else if(computerSelection === "PAPER"){
            return "You lost! Rock loses to paper";
        }
        else{
            return "You won! Rock beats scissors";
        }
    }
    else if(playerSelection == "PAPER"){
        if(computerSelection === "ROCK"){
            return "You won! Paper beats rock";
        }
        else if(computerSelection === "PAPER"){
            return "You tied! Paper ties paper";
        }
        else{
            return "You lost! Paper loses to scissors";
        }
    }
    else{
        if(computerSelection === "ROCK"){
            return "You lost! Scissors loses to rock";
        }
        else if(computerSelection === "PAPER"){
            return "You won! Scissors beats paper";
        }
        else{
            return "You tied! Scissors ties with scissors";
        }
    }
}

/*function game(){
    won = 0;
    lost = 0;
    tied = 0;
    for(let i = 0; i < 5; i++){
        playerSelection = window.prompt("Rock, Papers or Scissors?");
        computerSelection = computerPlay();
        result = round(playerSelection, computerSelection);
        console.log(result);
        if(result.indexOf("You won") == 0){
            won += 1;
        }
        else if(result.indexOf("You lost") == 0){
            lost += 1;
        }
        else{
            tied += 1;
        }
    }
    console.log(`You won ${won} times`)
    console.log(`You lost ${lost} times`)
    console.log(`You tied ${tied} times`)
}*/