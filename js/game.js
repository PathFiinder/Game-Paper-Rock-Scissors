const btnPlay = document.querySelector('.main__button');
const mainDiv = document.querySelector('.main');
const gameDiv = document.querySelector('.game');
const paper = document.querySelector('.game__image-paper');
const rock = document.querySelector('.game__image-rock');
const scissors = document.querySelector('.game__image-scissors');
const startGame = document.querySelector('.game__start');
const yourChoose = document.querySelector('.actual-score__user__choose');
const pcChoose = document.querySelector('.actual-score__pc__choose');
const winner = document.querySelector('.actual-score__winner');
const nrGames = document.querySelector('.game__final-score__score--number');
const nrWins = document.querySelector('.game__final-score__score--wins');
const nrLosses = document.querySelector('.game__final-score__score--losses');
const nrDraws = document.querySelector('.game__final-score__score--draws');
const options = ["paper", "rock", "scissors"];
let ifChoose = false;
let ifActive = false;
let numberOfGames = 0;
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;
let whichIsActive;
let pcIndex;
let whoWin = "";
let draw = false;


btnPlay.addEventListener('click', () => {
    mainDiv.classList.add('main--active');
    gameDiv.classList.add('game--active');
});

for (let i = 0; i < options.length; i++) {
    document.querySelector(`.game__image-${options[i]}`).addEventListener('click', () => {
        if (ifChoose == false) {
            document.querySelector(`.game__image-${options[i]}`).classList.toggle('game__image--active');
            ifChoose = true;
        }
    });
}

const checkActive = () => {
    if (paper.classList.contains('game__image--active')) {
        whichIsActive = 0
        ifActive = true
    } else if (rock.classList.contains('game__image--active')) {
        whichIsActive = 1
        ifActive = true
    } else if (scissors.classList.contains('game__image--active')) {
        whichIsActive = 2
        ifActive = true
    } else {
        ifActive = false
    }
}

const pcChoice = () => {
    const random = Math.floor(Math.random() * options.length);
    return random;
}

const clean = () => {
    for (let i = 0; i < options.length; i++) {
        document.querySelector(`.game__image-${options[i]}`).classList.remove('game__image--active');
        ifChoose = false;
    }
    whoWin = "";
}

const checkWin = (userId, pcId) => {
    draw = false;
    if (userId == 0 && pcId == 1) {
        whoWin = `User won`;
        numberOfWins++;
    } else if (userId == 0 && pcId == 2) {
        whoWin = `Computer won`;
        numberOfLosses++;
    } else if (userId == 1 && pcId == 0) {
        whoWin = `Computer won`;
        numberOfLosses++;
    } else if (userId == 1 && pcId == 2) {
        whoWin = `User won`;
        numberOfWins++;
    } else if (userId == 2 && pcId == 0) {
        whoWin = `User won`;
        numberOfWins++;
    } else if (userId == 2 && pcId == 1) {
        whoWin = `Computer won`;
        numberOfLosses++;
    } else if (userId == pcId) {
        draw = true;
        whoWin = "Draw"
        numberOfDraws++;
    }
}

startGame.addEventListener('click', (event) => {
    event.preventDefault();
    checkActive()
    if (ifActive == true) {
        yourChoose.textContent = options[whichIsActive];
        pcIndex = pcChoice();
        pcChoose.textContent = options[pcIndex];
        checkWin(whichIsActive,pcIndex);
        winner.textContent = whoWin
        numberOfGames++;
        nrGames.textContent = numberOfGames;
        nrWins.textContent = numberOfWins;
        nrLosses.textContent = numberOfLosses;
        nrDraws.textContent = numberOfDraws;
        clean();
    } else {
        alert("Choose one");
    }
})