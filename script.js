let options = ["rock", "paper", "scissors"];
let selected = 0;
let yourLives = 3;
let computerLives = 3;
let roundCount = 1;
let computerClick;
let playerClick;
let ended = false;

const imgs = document.querySelectorAll(".your img");
const yourLivesDisplay = document.querySelector(".player .score");
const computerLivesDisplay = document.querySelector(".computer .score");
const roundDisplay = document.querySelector(".round");
const messageText = document.querySelector(".message p");
const message = document.querySelector(".message");

function hover(e){
    e.target.classList.add("hovering");
}

function leave(e){
    e.target.classList.remove("hovering");
}

function computerChoice(choice){
    computerClick = document.querySelector(".computer ." + choice);
    computerClick.classList.add("computerClicked");
}

function removeComputerChoice(){
    computerClick.classList.remove("computerClicked")
}

function removePlayerChoice(){
    playerClick.classList.remove("playerClicked")
}

function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}

function round(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            yourLives -= 1;
            yourLivesDisplay.textContent = `${yourLives}`;
            messageText.textContent = "You lost the round!";
        }
        else if(computerSelection === "scissors"){
            computerLives -= 1;
            computerLivesDisplay.textContent = `${computerLives}`;
            messageText.textContent = "You won the round!";
        }
        else{
            messageText.textContent = "You tied the round!";
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection === "rock"){
            computerLives -= 1;
            computerLivesDisplay.textContent = `${computerLives}`;
            messageText.textContent = "You won the round!";
        }
        else if(computerSelection === "scissors"){
            yourLives -= 1;
            yourLivesDisplay.textContent = `${yourLives}`;
            messageText.textContent = "You lost the round!";
        }
        else{
            messageText.textContent = "You tied the round!";
        }
    }
    else{
        if(computerSelection === "rock"){
            yourLives -= 1;
            yourLivesDisplay.textContent = `${yourLives}`;
            messageText.textContent = "You lost the round!";
        }
        else if(computerSelection === "paper"){
            computerLives -= 1
            computerLivesDisplay.textContent = `${computerLives}`;
            messageText.textContent = "You won the round!";
        }
        else{
            messageText.textContent = "You tied the round!";
        }
    }
    roundCount += 1;
    roundDisplay.textContent = `Round ${roundCount}`;
}

function end(){
    if(yourLives === 0 || computerLives === 0){
        ended = true;
        const button = document.createElement("button");
        button.innerText = "New game"
        button.classList.add("buttonStyle");
        message.appendChild(button);
        if(yourLives === 0){
            messageText.textContent = "You lost the game!";
        }
        else{
            messageText.textContent = "You won the game!";
        }
    }
}

function restart(e){
    if(e.target.classList.contains("buttonStyle")){
        ended = false;
        selected = 1;
        yourLives = 3;  
        computerLives = 3;
        roundCount = 1;
        const button = document.querySelector("button");
        message.removeChild(button);
        roundDisplay.textContent = `Round ${roundCount}`;
        computerLivesDisplay.textContent = `${computerLives}`;
        yourLivesDisplay.textContent = `${yourLives}`;
    }
}

function clicked(e){
    if(ended === false){
        if(selected === 0){
            selected = 1;
        }
        else{
            removeComputerChoice();
            removePlayerChoice();
        }
        playerClick = e.target
        playerClick.classList.add("playerClicked");
        let computerSelection = computerPlay();
        let playerSelection = e.target.classList[0];
        computerChoice(computerSelection);
        round(playerSelection, computerSelection);
        end();
    }
}

imgs.forEach(img => {
    img.addEventListener("mouseenter", hover);
    img.addEventListener("mouseleave", leave);
    img.addEventListener("click", clicked);
});

message.addEventListener("click", restart);


