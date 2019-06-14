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
const options = ["paper", "rock", "scissors"];
let ifChoose = false;
let whichIsActive;
let pcIndex;


btnPlay.addEventListener('click', () => {
    mainDiv.classList.add('main--active');
    gameDiv.classList.add('game--active');
});

for (let i = 0; i < options.length; i++) {
    document.querySelector(`.game__image-${options[i]}`).addEventListener('click', () => {
        if (ifChoose == false) {
            document.querySelector(`.game__image-${options[i]}`).classList.add('game__image--active');
            ifChoose = true;
        }
    });
}

const checkActive = () => {
    if (paper.classList.contains('game__image--active')) {
        whichIsActive = 0
    } else if (rock.classList.contains('game__image--active')) {
        whichIsActive = 1
    } else if (scissors.classList.contains('game__image--active')) {
        whichIsActive = 2
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
}




    startGame.addEventListener('click', (event) => {
        event.preventDefault();

        checkActive()
        yourChoose.textContent = options[whichIsActive];
        pcIndex = pcChoice();
        console.log(pcIndex)
        pcChoose.textContent = options[pcIndex];
        clean();
    })