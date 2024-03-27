
//declare a function that lets the computer choose either rock,paper or scissors randomly.
function getComputerChoice(){ 
  choices = ['rock', 'paper', 'scissors'];
  return choices[(Math.floor(Math.random() * choices.length))];
}

//declare function that playes one round of game
//compare if the choices of the computer and the player are the same or not
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return 'its tie';
    }else if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')){
    return 'you lost, paper wraps rock';
   }else if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors')){
    return 'you won, rock crashes scissors';
   }else if((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')){
    return 'you lost, rock crashes scissors';
   }else if((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')){
    return ' you won, scissors cut paper';
   }else if((playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors')){
    return 'you lost, scissors cut paper';
   }else if((playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')){
    return 'you won, paper wraps rock';
   }
}
//function that let the game to play five rounds
//if the userplayer wins playerscore is incremented otherwise computerscore is incremented.
playerScore = 0;
computerScore = 0;
  function playgame(){
    for(let i = 0; i < 5; i++){
    const playerSelection = prompt('make a choise');
    const computerSelection = getComputerChoice();
    console.log((computerSelection));
      console.log(playRound(playerSelection,computerSelection));
      console.log(`User ${playerScore} VS Computer ${computerScore}`)
      if((playRound(playerSelection,computerSelection) === ("you won, scissors cuts paper"))||(playRound(playerSelection,computerSelection) === ("you won, rock crashes scissors."))||(playRound(playerSelection,computerSelection) === ("you won, paper wraps rock")))
      {
        playerScore++;
      }
       else if((playRound(playerSelection,computerSelection)  === ('you lost, paper wraps rock'))||(playRound(playerSelection,computerSelection) === ('you lost, rock crashes scissors'))||(playRound(playerSelection,computerSelection) === ('you lost, scissors cut paper'))){
        computerScore++;
       }
    }
    getTheWinner();
}
//this function checkes which score is greater or lesser and logs massege to console.
//this function called in the playgame function after the five round game to determine the winnner. 
 function getTheWinner(){
  console.log('Game over');
  if (playerScore > computerScore){
    console.log('congratulation you win the game.')
  }else if(playerScore < computerScore){
    console.log('try next time')
  }else {
    console.log('its tie')
  }
 } 
    
 playgame();





