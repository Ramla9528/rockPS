
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
    return 'you won, scissors cut paper';
   }else if((playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors')){
    return 'you lost, scissors cut paper';
   }else if((playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')){
    return 'you won, paper wraps rock';
   }
}
playerScore = 0;
computerScore = 0;


const container = document.querySelector(".container");
const round = document.querySelector("#round");
 const options = document.querySelector("#options");

 options.addEventListener("click", function(e){
  if(playerScore < 5 && computerScore < 5){
  let target = e.target;
  const playerSelection = target.id;
 const computerSelection = getComputerChoice(); 
round.textContent = playRound(playerSelection, computerSelection);


 if((playRound(playerSelection,computerSelection) === ("you won, scissors cut paper"))
 ||(playRound(playerSelection,computerSelection) === ("you won, rock crashes scissors."))
||(playRound(playerSelection,computerSelection) === ("you won, paper wraps rock"))){
  playerScore++;
 }
  else if((playRound(playerSelection,computerSelection)  === ('you lost, paper wraps rock'))
  ||(playRound(playerSelection,computerSelection) === ('you lost, rock crashes scissors'))
||(playRound(playerSelection,computerSelection) === ('you lost, scissors cut paper'))){
   computerScore++;
  }
  const score = document.querySelector("#display-score");
  score.textContent = `User Score ${playerScore}  Vs  Computer Score ${computerScore} `;
}
  if(playerScore == 5){
    const winner = document.querySelector("#winner");
    winner.textContent = "congratualtions you win the Game!";
  } else if (computerScore == 5){
    const winner = document.querySelector("#winner");
    winner.textContent = "computer wins the Game!";
  }
});

