'use in strict';
//ask input from the user
choice = prompt('what is your choice')
//declaring a function either returns rock, paper or scissors
function getComputerChoise (takee){
if (choice === 'rock' || choice === 'Rock'){
    return 'I love rock';
}else if(choice === 'Paper' || choice === 'paper'){
    return Paper;
    
}else if(choice === 'Scissors' || choice === 'scissors'){
    return 'hey welcome';
}else{
 return 'sorry we don\'t have that choice.';
}
}


console.log(getComputerChoise());