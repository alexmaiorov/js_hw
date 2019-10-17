let fl = true;
let chess = document.querySelector('.chess')
function GetChess(){
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            if (j===0) fl = !fl;
            let cell = document.createElement('div');
            (fl) ? cell.className = 'cell white' : cell.className = 'cell black'
            chess.append(cell);
            fl = !fl;
        }
    }
    chess.style.outline = '3px solid #000';
}