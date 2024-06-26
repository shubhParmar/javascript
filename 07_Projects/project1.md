# Project Related to DOM

## project link => [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution
```javascript

console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

## project 2 Solution 
```javascript
const form = document.querySelector('form')
// writing this here,this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value )
  const weight = parseInt(document.querySelector('#weight').value )
  const results = document.querySelector('#results')
  
  if(height === '' || height <0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // another method:
    // results.innerHTML = (weight / ((height * height) / 10000)).toFixed(2)

   // results.innerHTML = `<span> bmi is : ${bmi} </span>`

     value(bmi);

    function value(bmi) {
      if(bmi < 18.6) results.innerHTML = `<span> bmi is : ${bmi}  Under Weight`

    else if (bmi>18.6 && bmi<24.9) results.innerHTML = `<span> bmi is : ${bmi} Normal Range`

    else if (bmi>24.9) results.innerHTML = `<span> bmi is : ${bmi} Over Weigth`
    }
    
}
})
```

## project 3 solution
```javascript
// const clock = document.querySelector('#clock')
const clocks = document.getElementById('clock')

// setInterval(function(){},1000) =>syntax
setInterval(function(){
  let time = new Date()
  //console.log(time.toLocaleTimeString())
  clocks.innerHTML = time.toLocaleTimeString()
},1000)
```

## project 4 solution
```javasript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput =  document.querySelector('#guessField')
const userGuesses =  document.querySelector('.guesses')
const reminingAttempt = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuess = [] // adding all the guesses into a array for displaying
let numOfGuess = 1 

let playGame = true // to start/stop the game 

// to add the entered value into a variable
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess); // ##...
  })
}

// ## to check if the input guesses are valid or not 
function validateGuess(guess){
  if(isNaN(guess)){
    alert(`please enter a valid number`)
  }
  else if(guess<1){
    alert(`please enter a number greater than 0`)
  }
  else if(guess>100){
    alert(`please enter a number less than 100`)
  }
  else {
    previousGuess.push(guess); // to add this into a array
    if(numOfGuess === 11){
      displayGuess(guess); 
      displayMessage(`Game over, Random Number was ${randomNumber}`)
      endGame();
    }
    else{
      displayGuess(guess); 
      checkGuess(guess); // @@...
    }
  }
}

// @@ to check if the guessed number is correct or not
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You Won`);
    endGame();
  }
  else if(guess < randomNumber ){
    displayMessage(`Value TOO low`);
  }
  else if(guess > randomNumber){
    displayMessage(`Value TOO high`);
  }  
}

// to display the gussed values ,count them and decrease the remaining attempt 
function displayGuess(guess){
  userInput.value = '';
  userGuesses.innerHTML += `${guess}, `; 
  numOfGuess++;
  reminingAttempt.innerHTML = `${11-numOfGuess}`;

}

// to display message
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// to end the game if the user won or attempts ended and clear fields
function endGame(){
  userInput.value = ''; 
  userInput.setAttribute('disabled',''); // disabling further inputs
  p.classList.add('button')
  // making a button for new game
  p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`; 
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numOfGuess = 1;
    userGuesses.innerHTML = '';
    reminingAttempt.innerHTML = `${11-numOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage('');
    playGame = true;
  })
}
```