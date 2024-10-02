let playerScores = { TeamA: 0, TeamB: 0 };
let currentAnswer = '';
let round = 0;

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('answer-form').addEventListener('submit', validateAnswer);

function startGame() {
    round = 1;
    playerScores = { TeamA: 0, TeamB: 0 };
    document.getElementById('results').innerHTML = 'Game has started! Round 1.';
    countdownTimer();
}

function validateAnswer(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('user-answer').value;
    displayResult(userAnswer);
}

function displayResult(answer) {
    document.getElementById('results').innerHTML = `You guessed: ${answer}`;
}

function countdownTimer() {
    let countdown = 3;
    const timerDisplay = document.getElementById('countdown-timer');
    timerDisplay.style.display = 'block';
    
    const timerInterval = setInterval(() => {
        timerDisplay.innerHTML = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(timerInterval);
            timerDisplay.style.display = 'none';
        }
    }, 1000);
}
