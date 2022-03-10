// import functions and grab DOM elements
const shellImg0 = document.getElementById('shell0');
const shellImg1 = document.getElementById('shell1');
const shellImg2 = document.getElementById('shell2');

const button0 = document.getElementById('button0');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const aResetButton = document.getElementById('resetbutton');
const tryAgainButton = document.getElementById('buttonplayagain');


const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');
// let state

let wins = 0;
let total = 0;

let playState = 0;

tryAgainButton.style.visibility = 'hidden';

function getRandomItem() {

    const hidingPlaces = [
        'shell0',
        'shell1',
        'shell2'
    ];
    const index = Math.floor(Math.random() * hidingPlaces.length);

    const correctShell = `${hidingPlaces[index]}`;
    

    return correctShell;
}

function resetStyles(){
    shellImg0.src = 'assets/shell.PNG';
    shellImg1.src = 'assets/shell.PNG';
    shellImg2.src = 'assets/shell.PNG';
}

function handleGuess(shellId, correctShell){
    resetStyles();

    total++;


    if (correctShell === shellId){
        wins++;
    }
    //change correct shell image
    const correctShellImg = document.getElementById(`${correctShell}`);

    correctShellImg.src = 'assets/shellcorrect.PNG';

    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;

}

function hideButtons(){
    button0.style.visibility = 'hidden';
    button1.style.visibility = 'hidden';
    button2.style.visibility = 'hidden';
  
}


// set event listeners 
button0.addEventListener('click', () => {
    if (playState === 0){
        handleGuess('shell0', getRandomItem());
        playState = 1;
        hideButtons();
        tryAgainButton.style.visibility = 'visible';
    }
    
    
});

button1.addEventListener('click', () => {
    if (playState === 0){
        handleGuess('shell1', getRandomItem());
        playState = 1;
        hideButtons();
        tryAgainButton.style.visibility = 'visible';
    } 
    
    
});

button2.addEventListener('click', () => {
    if (playState === 0){
        handleGuess('shell2', getRandomItem());
        playState = 1;
        hideButtons();
        tryAgainButton.style.visibility = 'visible';
    } 
    
});
//hard reset
aResetButton.addEventListener('click', () => {

    resetStyles();

    wins = 0;
    total = 0;
    playState = 0;

    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
  
});
tryAgainButton.addEventListener('click', () => {
    playState = 0;
    resetStyles();
    button0.style.visibility = 'visible';
    button1.style.visibility = 'visible';
    button2.style.visibility = 'visible';
    tryAgainButton.style.visibility = 'hidden';
    
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
