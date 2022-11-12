const game = () => {
    pScore = 0;
    cScore = 0;

    //Starting the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }
    //Playing the match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        });
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                //Computer Choice
                setTimeout(()=>{
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Comparing Hands
                compareHands(this.textContent, computerChoice);
                //Updating Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });

        const updateScore = () => {
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');
            playerScore.textContent=pScore;
            computerScore.textContent=cScore;
        }


        const compareHands = (playerChoice, computerChoice) => {
            const winner = document.querySelector('.winner');
            //Checking for a tie
            if (playerChoice === computerChoice) {
                winner.textContent = 'It is a tie!';
                return;
            }
            //Checking for a rock
            if (playerChoice === 'rock'){
                if (computerChoice === 'scissors'){
                    winner.textContent = 'Player Wins!';
                    updateScore();
                    pScore++;
                    return;
                } else {
                    winner.textContent = 'Computer Wins!';
                    cScore++;
                    updateScore();
                    return;
                }
            }
            //Checking for a paper
            if (playerChoice === 'paper'){
                if (computerChoice === 'scissors'){
                    winner.textContent = 'Computer Wins!';
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Player Wins!';
                    pScore++;
                    updateScore();
                    return;
                }
            }
            //Checking for scissors
            if (playerChoice === 'scissors'){
                if (computerChoice === 'rock'){
                    winner.textContent = 'Computer Wins!';
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = 'Player Wins!';
                    pScore++;
                    updateScore();
                    return;
                }
            }
        }
    }


    //Calling all the inner functions
    startGame();
    playMatch();
}

game();