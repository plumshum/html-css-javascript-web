let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
 };

 updateScoreElement();

 function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors'){
       if(computerMove === 'rock'){
          result = 'You Lose.';
       }else if (computerMove === 'paper'){
          result = 'You Win.';
       }else if (computerMove === 'scissors'){
          result = 'Tie.';
       } 
    }
    else if(playerMove === 'rock'){
       if(computerMove === 'rock'){
          result = 'Tie.';
       }else if (computerMove === 'paper'){
          result = 'You Lose.';
       }else if (computerMove === 'scissors'){
          result = 'You Win.';
       } 
    }
    else if(playerMove === 'paper'){
       if(computerMove === 'rock'){
          result = 'You Win.';
       }else if (computerMove === 'paper'){
          result = 'Tie.';
       }else if (computerMove === 'scissors'){
          result = 'You Lose.';
       } 
    }

    if(result === 'You Win.'){
       score.wins++;
    }else if (result === 'You Lose.'){
       score.losses++;
    }else if (result === 'Tie.'){
       score.ties++;
    }

    //only supports strings
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
    .innerHTML = `YOU 
       <img src = "images/${playerMove}-emoji.png" class = "move-icon">
       <img src = "images/${computerMove}-emoji.png" class = "move-icon">
       Computer`;
 }


 function updateScoreElement(){
     document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
 }

 function pickComputerMove(){
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3){
       computerMove = 'rock';
    }else if (randomNumber >= 1/3 && randomNumber < 2/3){
       computerMove = 'paper';
    }
    else{
       computerMove = 'scissors';
    }
    return computerMove;
 }