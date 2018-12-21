/*
GAME Function
- Player must guess a number b/w a min and max
- Player gets a certain number of guesses
- Notify the player of guesses remaning
- Notify player of correct number if looe
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 5,
    winningNum = 2,
    guessesLeft = 3;


// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    // validate input
    if (isNaN(guess) || (guess < min) || (guess>max)){
        setMessage(`Please enter number between ${min} and ${max}`, 'red');
    }

    // check if won
    if (guess == winningNum){
        // Game over - won!
        // Disable input
        guessInput.disabled = true;
        // change border to green
        guessInput.style.borderColor = 'green';
        // Inform user of win
        setMessage(`${winningNum} is correct. You win!!`, 'green');
    } else{
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0 ){
            // Game over lost
            // Disable input
            guessInput.disabled = true;
            // change border to green
            guessInput.style.borderColor = 'red';
            // Inform user of win
            setMessage(`Game over! You lost. The correct number was ${winningNum}.`, 'red');
        } else{
            // game continues; answer wrong
        }
    }

});

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}