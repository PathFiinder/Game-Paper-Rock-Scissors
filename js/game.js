const btnPlay = document.querySelector('.main__button');
const mainDiv = document.querySelector('.main');
const gameDiv = document.querySelector('.game');
const paper = document.querySelector('.game__image-paper');
const rock = document.querySelector('.game__image-rock');
const scissors = document.querySelector('.game__image-scissors');

const options = ["paper", "rock", "scissors"];
let ifChoose = false;

btnPlay.addEventListener('click', () => {
    mainDiv.classList.add('main--active');
    gameDiv.classList.add('game--active');
});

paper.addEventListener('click', () => {
    if (ifChoose == false) {
        paper.classList.add('game__image--active');
        ifChoose = true;
    }
});

rock.addEventListener('click', () => {
    if (ifChoose == false) {
        rock.classList.add('game__image--active');
        ifChoose = true;
    }
});

scissors.addEventListener('click', () => {
    if (ifChoose == false) {
        scissors.classList.add('game__image--active');
        ifChoose = true;
    }
});