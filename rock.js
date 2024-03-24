'use in strict';
//declaring a function either returns rock, paper or scissors randomly
function getComputerChoice(){
    //declare a variable to store an array that consists of (rock, paper, and scissors)
    const choices = ['rock', 'paper', 'scissors'];
    //return a random choice from math.random
return choices[(Math.floor(Math.random() * choices.length))];
}
getComputerChoice();
//declare function that playes one round of game
function playRound(playerSelection, computerSelection) {
    // your code here!
    //stating the winner according to choice of the computer and the userplayer
    if(playerSelection === computerSelection){
        return 'its tie';
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
    return 'you lose, wraps rock';
   }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    return 'you lose, scissors cut paper';
   }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    return 'congratulations you won, scissors cut paper';
   }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    return 'congratulations, you won rock crashes scissors';
   }else if(playerSelection === 'paper' && computerSelection === 'rock'){
    return 'you won, paper wraps rock';
   }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    return 'you lost, rock crashes scissors';
   }
}
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
