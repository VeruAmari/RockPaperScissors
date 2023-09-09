console.log("Hello World");

const CHOICES = ["rock", "paper", "scissors"];


function getIndex (n) {
    // Get a random number between 0 and the given number (inclusive)
    let index = Math.floor(Math.random() * n);
    return index;
};


function getComputerChoice () {
    // Pick randomly between rock paper and scissors
    return CHOICES[getIndex(3)];
};


function handleResult(winner) {

    // Return a string decaring the corresponding winner

    if (winner === "tie") {
        console.log("It's a tie!")
    }
    else if (winner === "computer") {
        console.log("Computer wins this round!")
    }
    else {
        console.log("Player wins this round!")
    }
    return winner
};


function getWinner (com, p1) {

    // Based on computer and player choices, determine who wins
    // and then handle the result accordingly

    switch(com) {
        case ("rock"):
            switch(p1) {
                case ("rock"):
                    // Both picked the same, it's a tie
                    return handleResult("tie");
                case ("paper"):
                    // Rock loses against paper so player wins
                    return handleResult("player");
                case ("scissors"):
                    // Rock beats scissors so computer wins
                    return handleResult("computer");
            }
            break;
        case ("paper"):
            switch(p1) {
                case ("rock"):
                    // Paper beats rock so computer wins
                    return handleResult("computer");
                case ("paper"):
                    // Both picked the same, it's a tie
                    return handleResult("tie");
                case ("scissors"):
                    // Paper loses against scissors so player wins
                    return handleResult("player");
            }
            break;
        case ("scissors"):
            switch(p1) {
                case ("rock"):
                    // Scissor loses against rock so player wins
                    return handleResult("player");
                case ("paper"):
                    // Scissor beats paper so computer wins
                    return handleResult("computer");
                case ("scissors"):
                    // Both picked the same, it's a tie
                    return handleResult("tie");
            }
            break;
    }
}


function playRound (playerSelection) {
    let computerSelection = getComputerChoice();
    let playerInput = (getPlayerInput(playerSelection))
    let winner = getWinner(computerSelection, playerInput)

    updateGameStatus(winner);
};


function getPlayerInput(e){
    return e.target.id;
    //game(1, playerInput);
};


function updateGameStatus(roundWinner) {
    // Store scores here
    let rounds = document.getElementById('roundsPlayed');
    let player = document.getElementById('playerScore');
    let computer = document.getElementById('computerScore');
    
    console.log(rounds, player, computer)

    // Update scores
    if (roundWinner === "player") {
        player++;
    }
    else if (roundWinner === "computer") {
        computer++;
    }
    //rounds++;
    
    // Display current score in console
         
};

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

/*

New Pseudocode for game:
When player first opens the page, set up a game status variable.
Display current game status underneath clickable options, starting scores are 0.
Update status after each round is played, (except on tie) until 5 rouds have been played.
 
*/
