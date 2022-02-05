let options = ["rock", "paper", "scissors"];
let selected = 0;
let yourLives = 5;
let computerLives = 5;
let roundCount = 1;

const imgs = document.querySelectorAll(".your img");
const yourLivesDisplay = document.querySelector(".player .score");
const computerLivesDisplay = document.querySelector(".computer .score");
const roundDisplay = document.querySelector(".round");


function hover(e){
    e.target.classList.add("hovering");
}

function leave(e){
    e.target.classList.remove("hovering");
}

function computerDisplay(choice){
    const display = document.querySelector(".computer ." + choice);
    display.classList.add("computerClicked");
}

function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}

function round(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            yourLives -= 1;
            yourLivesDisplay.textContent = `${yourLives}`;
        }
        else if(computerSelection === "scissors"){
            computerLives -= 1;
            computerLivesDisplay.textContent = `${computerLives}`;
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection === "rock"){
            computerLives -= 1;
            computerLivesDisplay.textContent = `${computerLives}`;
        }
        else if(computerSelection === "scissors"){
            yourLives -= 1;
            yourLivesDisplay.textContent = `${yourLives}`
        }
    }
    else{
        if(computerSelection === "rock"){
            yourLives -= 1;
            yourLivesDisplay.textContent = `${yourLives}`
        }
        else if(computerSelection === "paper"){
            computerLives -= 1
            computerLivesDisplay.textContent = `${computerLives}`;
        }
    }
    roundCount += 1;
    roundDisplay.textContent = `Round ${roundCount}`;
}

function clicked(e){
    if(selected === 0){
        selected = 1;
        e.target.classList.add("playerClicked");
        let computerSelection = computerPlay();
        let playerSelection = e.target.classList[0];
        computerDisplay(computerSelection);
        round(playerSelection, computerSelection);
        selected = 0;
    }
}

imgs.forEach(img => {
    img.addEventListener("mouseenter", hover);
    img.addEventListener("mouseleave", leave);
    img.addEventListener("click", clicked);
});


