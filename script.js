
let playerScore = 0;
let computerScore = 0;

let roundCounter = 1;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (userChoice === computerChoice) {
        result = 'Empate!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'Você venceu!';
        playerScore++;
    } else {
        result = 'Computador venceu!';
        computerScore++;
    }

    const choiceMap = {
        rock: { img: 'assets/pedra.png', alt: 'Pedra' },
        paper: { img: 'assets/papel.png', alt: 'Papel' },
        scissors: { img: 'assets/tesoura.png', alt: 'Tesoura' }
    };

    const resultHTML = `
        <div class="mini-row">
            <span class="mini-btn">
                <img src="${choiceMap[userChoice].img}" alt="${choiceMap[userChoice].alt}" class="mini-icon"> 
            </span>
            <span class="versus">VS</span>
            <span class="mini-btn">
                <img src="${choiceMap[computerChoice].img}" alt="${choiceMap[computerChoice].alt}" class="mini-icon">
            </span>
        </div>
        <div class="mini-result">${result}</div>
    `;
    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('roundCounter').textContent = roundCounter;
    roundCounter++;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    roundCounter = 1;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('roundCounter').textContent = roundCounter;
    document.getElementById('result').innerHTML = '';
}