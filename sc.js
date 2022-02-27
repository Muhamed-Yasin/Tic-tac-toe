const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = [];
const O_TEXT = "O";
const X_TEXT = "X";

let currentPlayer;


const drawBox = () =>{
    boxes.forEach((box,index) =>{
        let stylestring = '';
        if(index < 3){
            stylestring += 'border-bottom: 3px solid black;';
        }
        if(index % 3==0){
            stylestring += 'border-right: 3px solid black;';
        }
        if(index>5){
            stylestring += 'border-top: 3px solid black;';
        }
        if(index%3==2){
            stylestring += 'border-left: 3px solid black;';
        }
        box.style = stylestring;
        box.addEventListener('click',boxclicked)
    })
}
const boxclicked = (e) =>{
    const id = e.target.id;
    console.log(id);
    if(spaces[id]== null){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerhasWon( )){
            playText.innerText = `${currentPlayer} has won!`;
        }
    if(currentPlayer == O_TEXT){
            currentPlayer = X_TEXT;
    }
    else{
            currentPlayer=O_TEXT;
    }
    }
}

const playerhasWon = () =>{
    if(spaces[0]==currentPlayer){
        if(spaces[1]==currentPlayer && spaces[2]==currentPlayer){
            console.log(`${currentPlayer} wins up top.`);
            return true;
        }
        if(spaces[3]==currentPlayer && spaces[6]==currentPlayer){
            console.log(`${currentPlayer} wins on left.`);
            return true;
        }
        if(spaces[4]==currentPlayer && spaces[8]==currentPlayer){
            console.log(`${currentPlayer} wins diagonally.`);
            return true;
        }
    }
    if(spaces[2]==currentPlayer){
        if(spaces[5]==currentPlayer && spaces[8]==currentPlayer){
            console.log(`${currentPlayer} wins on the right.`);
            return true;
        }
        if(spaces[4]==currentPlayer && spaces[6]==currentPlayer){
            console.log(`${currentPlayer} wins diagonally.`);
            return true;
        }
    }
    if(spaces[6]==currentPlayer){
        if(spaces[7]==currentPlayer && spaces[8]==currentPlayer){
            console.log(`${currentPlayer} wins down low.`);
            return true; 
        }
    }
    if(spaces[4]==currentPlayer){
        if(spaces[1]==currentPlayer && spaces[7]==currentPlayer){
            console.log(`${currentPlayer} wins vertically.`);
            return true;
        }
        if(spaces[3]==currentPlayer && spaces[5]==currentPlayer){
            console.log(`${currentPlayer} wins horizontally.`);
            return true;
        }
    }
}

const restart = (e) =>{
    spaces.forEach( (space,index)=>{
        spaces[index]= null;
    })
    boxes.forEach(box =>{
        box.innerText = '';
    })
    playText.innerText = `Let's Play!`;
    currentPlayer = O_TEXT;
}

restartBtn.addEventListener('click',restart)
restart();
drawBox();