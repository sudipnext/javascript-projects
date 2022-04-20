const getUserChoice = userInput => {
    getUserInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput

    }else{
        console.log('Please reenter i cannot read you!');
     }
};
const getComputerChoice = computerChoice =>{
    const randomNumber = Math.floor(Math.random()* 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        return 'Its draw';
    }
    if (userChoice === 'rock'){
        if (computerChoice === 'scissors'){
            return 'You won the game! Congratulations Buddy';
        }else{
            return 'computer won the sorry! better luck next time';
          }
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'You loose! ';
        }else{
            return 'you won!';
         }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'computer won the game';
        }else{
            return 'you won the game buddy ! good luck';
         }

    }
    if (userChoice === 'bomb'){
        return 'You won the game cheater!'
    }
};
const playgame = () =>{
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw : ' + userChoice);
    console.log('computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playgame();
