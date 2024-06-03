const buttons = document.querySelectorAll('button');
const buttonsDiv = document.querySelector('.buttons');
const selection = document.querySelector('.selection');
const score = document.querySelector('.score');
const result = document.querySelector('.result');
const begin = document.querySelector('.begin');


let humanScore = 0;
let computerScore = 0;

const againButton = document.createElement('button');
againButton.textContent = 'PLAY AGAIN'
againButton.classList.add('again-button');

buttons.forEach(button => button.addEventListener('click', getHumanChoice));
buttons.forEach(button => button.addEventListener('mousedown', playTransition));
buttons.forEach(button => button.addEventListener('click', playTransition));

againButton.addEventListener('click', playAgain);

function playTransition(event){
   event.target.classList.toggle('clicked');
}

function getHumanChoice(button){
    begin.style.display = 'none';

    humanChoice = button.target.id;

    computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice)
}

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

function playAgain(){
    selection.textContent = '';
    score.textContent = '';
    result.textContent = '';
    begin.style.display = '';

    buttonsDiv.removeChild(againButton);
    buttons.forEach(button => button.style.display = '');    
}

function resultColor(color){
    selection.style.color = `${color}`;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        selection.textContent = "It's a tie!";
        resultColor('black');
    }

    if(humanChoice === 'rock'){
        if(computerChoice === 'scissors'){
            selection.textContent = 'Human wins this round! Rock beats scissors.';
            humanScore++;
            resultColor('green');

        } else{
            selection.textContent = 'Computer wins this round! Paper beats rock.';
            computerScore++;
            resultColor('red');

        }
    } else if(humanChoice === 'paper'){
        if(computerChoice === 'rock'){
            selection.textContent = 'Human wins this round! Paper beats rock.';
            humanScore++;
            resultColor('green');

        } else{
            selection.textContent = 'Computer wins this round! Scissors beats paper.';
            computerScore++;
            resultColor('red');

        }
    } else{
        if(computerChoice === 'paper'){
            selection.textContent = 'Human wins this round! Scissors beats paper.';
            humanScore++;
            resultColor('green');

        } else{
            selection.textContent = 'Computer wins this round! Rock beats paper.';
            computerScore++;
            resultColor('red');

        }
    }

    score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        if(humanScore === computerScore){
            selection.textContent = '';
            result.textContent = 'YOU HAVE TIED!';
            result.style.color = 'black';

        } else if(humanScore > computerScore){
            selection.textContent = '';
            result.textContent = 'YOU WIN!!!!!';
            result.style.color = 'green';

        } else {
            selection.textContent = '';
            result.textContent = 'The machines have won.';
            result.style.color = 'red';

        }

        humanScore = 0;
        computerScore = 0;

        buttons.forEach(button => button.style.display = 'none');
        buttonsDiv.appendChild(againButton);
        
        return
    }
}


