"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ps = require("prompt-sync");
const prompt = ps();
const gameCount = 5;
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
const gamePlay = (pick1, pick2) => {
    if (pick1 === 'rock' && pick2 === 'paper') {
        console.log('computer wins');
    }
    else if (pick1 === 'rock' && pick2 === 'scissor') {
        console.log('player wins');
    }
    else {
        console.log('what a hit');
    }
};
const game = () => {
    for (let i = 1; i <= gameCount; i++) {
        gamePlay(player, computer);
    }
};
game();
//# sourceMappingURL=rps.js.map