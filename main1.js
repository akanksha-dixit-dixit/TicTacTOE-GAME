let boxes = document.querySelectorAll('input');
boxes = [...boxes]; // changing node list into array
const resetBtn = document.querySelector('.reset');

let container  = document.querySelector('.container');

container.addEventListener('click', (e) => {
    console.log((e.target).parentNode);
})





let playerOne = true;

boxes.map(box => {
  box.addEventListener('click', clickHandler);
});


function clickHandler(event) {


    // setting X or O based on which player's trun it is
    playerOne ? event.target.value = 'X' : event.target.value = 'O';

    // disable input
    event.target.setAttribute('disabled', '');

    // check if a current player is winning
    let winner = checkForWinner();

    if(winner)  {
        playerOne ? alert('player one won !') : alert('player two won !');
        resetGame();
    } else  {
        // change player
        playerOne = !playerOne;
    }
    
}

function checkForWinner() {
    // BOARD STATE OBJECT
    let boardState = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    }

    // get boards current state
    boxes.map( (box, index) => {
        boardState[index + 1] = box.value;
    });

    let playerSymbolToCheck = playerOne ? 'X' : 'O';

    if(boardState[1] === playerSymbolToCheck && boardState[2] === playerSymbolToCheck && boardState[3] === playerSymbolToCheck) {
        return true
    } else if(boardState[4] === playerSymbolToCheck && boardState[5] === playerSymbolToCheck && boardState[6] === playerSymbolToCheck) {
        return true
    } else if(boardState[7] === playerSymbolToCheck && boardState[8] === playerSymbolToCheck && boardState[9] === playerSymbolToCheck) {
        return true
    } else if(boardState[1] === playerSymbolToCheck && boardState[4] === playerSymbolToCheck && boardState[7] === playerSymbolToCheck) {
        return true
    } else if(boardState[2] === playerSymbolToCheck && boardState[5] === playerSymbolToCheck && boardState[8] === playerSymbolToCheck) {
        return true
    } else if(boardState[3] === playerSymbolToCheck && boardState[6] === playerSymbolToCheck && boardState[9] === playerSymbolToCheck) {
        return true
    } else if(boardState[1] === playerSymbolToCheck && boardState[5] === playerSymbolToCheck && boardState[9] === playerSymbolToCheck) {
        return true
    } else if(boardState[3] === playerSymbolToCheck && boardState[5] === playerSymbolToCheck && boardState[7] === playerSymbolToCheck) {
        return true
    } else return false;
}

function resetGame() {
    boxes.map( (box, index) => {
        // remove disabled input
        box.removeAttribute('disabled');
        box.value = '';
    });
    playerOne = true;
}

resetBtn.addEventListener('click', resetGame);