function getComputerChoice(){
   random = Math.floor(Math.random() * 3) + 1;
   computerChoice = '';
   
   if(random === 1){
    computerChoice = 'rock';
   } else if(random === 2){
    computerChoice = 'paper';
   } else{
    computerChoice = 'scissors';
   }

   return computerChoice
}

function getHumanChoice(){
    humanChoice = prompt('Choose rock, paper or scissors!').toLowerCase();

    return humanChoice
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("It's a tie!")
            return
        }
    
        if(humanChoice === 'rock'){
            if(computerChoice === 'scissors'){
                console.log('Human wins! Rock beats scissors.');
                humanScore++;
            } else{
                console.log('Computer wins! Paper beats rock.');
                computerScore++;
            }
        } else if(humanChoice === 'paper'){
            if(computerChoice === 'rock'){
                console.log('Human wins! Paper beats rock.');
                humanScore++;
            } else{
                console.log('Computer wins! Scissors beat paper.');
                computerScore++;
            }
        } else{
            if(computerChoice === 'paper'){
                console.log('Human wins! Scissors beats paper.');
                humanScore++;
            } else{
                console.log('Computer wins! Rock beat paper.');
                computerScore++;
            }
        }
    }

    for(i = 1; i <= 5; i++){
        getHumanChoice();
        getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore === computerScore){
        console.log('YOU HAVE TIED!');
    } else if(humanScore > computerScore){
        console.log('YOU WIN!!!!!');
    } else {
        console.log('The machines have won.');
    }


    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

}

playGame();