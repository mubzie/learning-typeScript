"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ps = require("prompt-sync");
const prompt = ps();
let playerWin = 0;
let computerWin = 0;
const game = () => {
    const getPlayerChoice = () => {
        const playerChoice = prompt('what is your choice? rock, paper or scissor?', '');
        console.log(playerChoice);
        return playerChoice;
    };
    const player = getPlayerChoice();
    const getComputerChoice = () => {
        const computerChoice = Math.floor(Math.random() * 3) + 1;
        console.log(computerChoice);
        if (computerChoice === 1) {
            console.log('rock');
            return 'rock';
        }
        else if (computerChoice === 2) {
            console.log('paper');
            return 'paper';
        }
        else {
            console.log('scissor');
            return 'scissor';
        }
    };
    const computer = getComputerChoice();
    if (player === 'rock' && computer === 'paper') {
        playerWin++;
        console.log('computer wins');
    }
    else if (player === 'rock' && computer === 'scissor') {
        computerWin++;
        console.log('player wins');
    }
    else {
        console.log('what a hit');
    }
};
const play = () => {
    for (let i = 1; i <= 5; i++) {
        game();
    }
    if (playerWin > computerWin) {
        console.log('player wins the game');
    }
    else if (playerWin < computerWin) {
        console.log('computer wins the game');
    }
    else {
        console.log('the game ended in a tie');
    }
};
play();
//# sourceMappingURL=rps.js.map