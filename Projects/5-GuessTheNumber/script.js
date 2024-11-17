let randomNumber = parseInt((Math.random()*100 )+1);  //now it is between 1 to 100 

const userinput = document.querySelector('#guessField');
const submit = document.querySelector('#sub');
const startOver = document.querySelector('.resultParas');
const guessArray =document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.LowOrHigh');

//now we creat paragraph p to use

const p = document.createElement('p');

let prevGuess = [];
let numberOfGuess = 1;
let playGame = true; // flag

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(); // block the value so it can't go any where like server
        const guess = parseInt(userinput.value);
        console.log(guess);
        validationOfGuess(guess);
    });
}

function validationOfGuess(guess){
    if( guess === '' ){
        alert('Please enter a valid number !!' );
        userinput.value ='';
    }else if(guess <1){
        alert('Please enter a number more than 1 !!');
        userinput.value ='';
    }else if(guess >100){
        alert('Please enter a number less than 100 !!');
        userinput.value ='';

    }else if(isNaN(guess)){
        alert('Please enter a valid number !!');
        userinput.value ='';
    }else{       //so now number is valid and add in prevGuess
        prevGuess.push(guess);
        if (numberOfGuess === 10){
            cleanUpGuess(guess);
            displaymessage(`Game Over , Random number was ${randomNumber} .`);
            endGame();
        }else{
            cleanUpGuess(guess);
            checkGuess(guess);
        }

    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displaymessage(' WOOHOOOO ! You  did it ! You Guessed It Right !! ');
        displaymessage(` Great job! You discovered the number ${guess} in only ${numberOfGuess - 1} tries . `);
        endGame();
    }else if(guess < randomNumber){
        displaymessage(`Not quite, it's a bit lower !!`);
    }else if(guess > randomNumber){
        displaymessage(' Almost there, but you need to guess higher!');
    }
}

function cleanUpGuess(guess){
    userinput.value ='';
    guessArray.innerHTML += `${guess}, `;
    guessRemaining.innerHTML = `${10 - numberOfGuess}`;
    // guessRemaining--;
    numberOfGuess++;

}

function displaymessage(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userinput.value ='';
    userinput.setAttribute('disabled','') ;
    p.classList.add('button');  // create p and add class
    p.innerHTML= `<h2 id="newGame"> Start new Game</h2> `;
    startOver.appendChild(p);
    playGame =false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){

    randomNumber = parseInt((Math.random()*100 )+1);  
    prevGuess = [];
    numberOfGuess = 1;
    guessArray.innerHTML = '';
    guessRemaining.innerHTML = ` ${10 - numberOfGuess}`;
    lowOrhigh.innerHTML = '' ;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true ;

    });
}
