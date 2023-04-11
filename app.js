const game = ()=>{
    let pScore=0;
    let cScore=0;

    const startGame = ()=>{
        const playButton=document.querySelector('.intro button');
        const introScreen=document.querySelector('.intro');
        const match=document.querySelector('.match');

        playButton.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    const playMatch=()=>{
        const options=document.querySelectorAll('.options button');
        const playerHand=document.querySelector('.Player_hand');
        const computerHand=document.querySelector('.Computer_hand');
        const hands=document.querySelectorAll('.hands img');

        hands.forEach(hand=>{
            hand.addEventListener('animationend', function(){
                this.style.animation='';
            });
        })

        const computerOptions=['rock','paper','scissors'];
        options.forEach(option=>{
            option.addEventListener('click', function(){
                const computerNumber=Math.floor(Math.random()*3);
                const computerChoice=computerOptions[computerNumber];
                playerHand.style.animation='shakePlayer 2s ease';
                computerHand.style.animation='shakeComputer 2s ease';
                setTimeout(() =>{
                    playerHand.src=`./Images/${this.textContent}.png`;
                computerHand.src=`./Images/${computerChoice}.png`;
                compareHands(this.textContent,computerChoice);
                }, 2000);
            });
        });
        

    };

    const updateScore=()=>{
        const playerScore=document.querySelector('.player_score p');
        const computerScore=document.querySelector('.computer_score p');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore
    }

    const compareHands=(playerChoice, computerChoice)=>{
        const winner=document.querySelector('.winner');
        if(playerChoice===computerChoice){
            winner.textContent='It is a tie';
            return;
        }
        if(playerChoice==='rock'){
            if(computerChoice==='scissors'){
                winner.textContent='Player wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice==='paper'){
            if(computerChoice==='scissors'){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice==='scissors'){
            if(computerChoice==='paper'){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent='Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
    }
    startGame();
    playMatch();
};

game();