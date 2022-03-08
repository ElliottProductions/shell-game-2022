// import functions and grab DOM elements
const shellImg0 = document.getElementById('shell0');
const shellImg1 = document.getElementById('shell1');
const shellImg2 = document.getElementById('shell2');

const button0 = document.getElementById('button0');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const aResetButton = document.getElementById('resetbutton');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');
// let state

let wins = 0;
let total = 0;
function getRandomShell() {

    const hidingPlaces = [
        'shell0',
        'shell1',
        'shell2'
    ];
    const index = Math.floor(Math.random() * 3);//hidingPlaces.length);

    const correctShell = `${hidingPlaces[index]}`;
    

    return correctShell;
}

function guessShell(shellId, correctShell){
  //turn into its own function EVENTUALLY
    shellImg0.src = 'assets/shell.PNG';
    shellImg1.src = 'assets/shell.PNG';
    shellImg2.src = 'assets/shell.PNG';
    ///end of own function

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


// set event listeners 
button0.addEventListener('click', () => {
    guessShell('shell0', getRandomShell());
});

button1.addEventListener('click', () => {
    guessShell('shell1', getRandomShell());
});

button2.addEventListener('click', () => {
    guessShell('shell2', getRandomShell());
});
//hard reset
aResetButton.addEventListener('click', () => {
    shellImg0.src = 'assets/shell.PNG';
    shellImg1.src = 'assets/shell.PNG';
    shellImg2.src = 'assets/shell.PNG';

    wins = 0;
    total = 0;

    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
  
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
