let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

function playGame(playerMove) {
  
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'sun') {
    if (computerMove === 'sun') {
      result = 'Tie.';
    } else if (computerMove === 'moon') {
      result = 'You lose.'; 
    } else if (computerMove === 'planet') {
      result = 'You win!';
      }
    
    } else if (playerMove === 'planet') {
      if (computerMove === 'planet') {
        result = 'Tie.'; 
    } else if (computerMove === 'sun') {
      result = 'You lose.';
    } else if (computerMove === 'moon') 
      result = 'You win!';
    
    
    } else if (playerMove === 'moon') {
      if (computerMove === 'moon') {
        result = 'Tie.';
      } else if (computerMove === 'planet') {
        result = 'You lose.';
       } else if (computerMove === 'sun') {
          result = 'You win!';
        }
      }

      if (result === 'You win!') {
        score.wins += 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScore();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = 
      `You chose: <img src="images/${playerMove}-emoji.png" class="move-icon-result">
      
      Computer chose:
      <img src="images/${computerMove}-emoji.png" class="move-icon-result">`;
    
    }
  
  function updateScore() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }


function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '';

if (computerMove >= 0 && randomNumber < 1 / 3) {
  computerMove = 'sun';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'planet';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'moon';
}
return computerMove;
}

var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});