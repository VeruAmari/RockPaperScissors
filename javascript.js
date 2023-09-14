console.log("Hello World");

const CHOICES = ["rock", "paper", "scissors"];


function getIndex (n) {
    // Get a random number between 0 and the given number (inclusive)
    let index = Math.floor(Math.random() * n);
    return index;
};

function updateStatus (e) {
    const status = document.querySelector('#status');
    status.textContent = e;
}

function getComputerChoice (playerChoice) {
    /*
    takes in a string playerChoice, to be
    removed from computer's list of choices
    */
    
    let new_choices = [];
    
    CHOICES.forEach((element) => (element === playerChoice) ? console.log("Avoiding", element) : new_choices.push(element));
    // Pick randomly between rock paper and scissors
    return new_choices[getIndex(2)];
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
        console.log("You win this round!")
    }
    return winner
};

// ✂️📜🪨
function getWinner (com, p1) {

    // Based on computer and player choices, determine who wins
    // and then handle the result accordingly
    let c = '';
    switch(com) {
        case ("rock"):
            c = "Computer picked 🪨 and ";
            switch(p1) {
                case ("rock"):
                    // Both picked the same, it's a tie
                    return handleResult("tie");
                case ("paper"):
                    // Rock loses against paper so player wins
                    updateStatus(c + "lost against your 📜!")
                    return handleResult("player");
                case ("scissors"):
                    // Rock beats scissors so computer wins
                    updateStatus("Oh no! " + c + "beat your ✂️!")
                    return handleResult("computer");
            }
            break;
        case ("paper"):
            c = "Computer picked 📜 and ";
            switch(p1) {
                case ("rock"):
                    // Paper beats rock so computer wins
                    updateStatus("Oh no! " + c + "beat your 🪨!")
                    return handleResult("computer");
                case ("paper"):
                    // Both picked the same, it's a tie
                    return handleResult("tie");
                case ("scissors"):
                    // Paper loses against scissors so player wins
                    updateStatus(c + "lost against your ✂️!")
                    return handleResult("player");
            }
            break;
        case ("scissors"):
            c = "Computer picked ✂️ and ";
            switch(p1) {
                case ("rock"):
                    // Scissor loses against rock so player wins
                    updateStatus(c + "lost against your 🪨");
                    return handleResult("player");
                case ("paper"):
                    // Scissor beats paper so computer wins
                    updateStatus("Oh no! " + c + "beat your 📜!")
                    return handleResult("computer");
                case ("scissors"):
                    // Both picked the same, it's a tie
                    return handleResult("tie");
            }
            break;
    }
}


function playRound (playerSelection) {
    let playerInput = (getPlayerInput(playerSelection))
    let computerSelection = getComputerChoice(playerInput);
    let winner = getWinner(computerSelection, playerInput)

    updateGameStatus(winner);
};


function getPlayerInput(e){
    return e.target.id;
    //game(1, playerInput);
};


function announceWinner(winner) {
    let setWinner = document.querySelector('#winner');
    if (winner === 'Computer') {
        setWinner.innerText = (winner + ' wins the match!');
    } else {
        setWinner.innerText = ('You win the match!')
    }

    let buttons = document.querySelectorAll('.choiceMaker')

    buttons.forEach((button)=> {
        button.removeEventListener('mousedown', playRound, false);
    })
    document.querySelector("#playAgain").classList.toggle("invisible");

};


function resetScores() {
    document.querySelector('#roundsPlayed').innerText = '0';
    document.querySelector('#playerScore').innerText = '0';
    document.querySelector('#computerScore').innerText = '0';
    document.querySelector('#winner').innerText = '';
    document.querySelector('#status').innerText = '';
};


function updateGameStatus(roundWinner) {
    // Store scores here
    let roundsPlayed = document.querySelector('#roundsPlayed');
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');
    
    let rounds = roundsPlayed.textContent;
    let player = playerScore.textContent;
    let computer = computerScore.textContent;
    // Update scores
    if (roundWinner === "player") {
        player++;
        playerScore.innerText = player;
    }
    else if (roundWinner === "computer") {
        computer++;
        computerScore.innerText = computer;
    }

    // Update rounds count
    rounds++;
    roundsPlayed.innerText = rounds;

    // Announce a winner at a score of 5
    if (+player> 4 || +computer > 4) {
        
        +player > +computer ? announceWinner('Player') : announceWinner('Computer');
    };

};

function activateChoices () {
    let buttons = document.querySelectorAll('.choiceMaker');
    buttons.forEach(button => button.addEventListener('mousedown', playRound));
}

function playAgain () {
    resetScores();
    activateChoices();
    document.querySelector("#playAgain").classList.toggle("invisible");
}

let playAgainButton = document.querySelector("#playAgain");
playAgainButton.addEventListener('mousedown', playAgain);

activateChoices();
/*

New Pseudocode for game:
When player first opens the page, set up a game status variable.
Display current game status underneath clickable options, starting scores are 0.
Update status after each round is played, (except on tie) until 5 rouds have been played.
 
*/
