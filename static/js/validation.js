
export let validation = {

    trackPiecesInMatrix : function () {
        let cells = document.querySelectorAll('.cell');
        let index = 0, matrix = [];
        for(let i=0; i<8; ++i){
            let tmp = [];
            for(let j=0; j<8; ++j){
                if(cells[index].firstElementChild) {
                    let color = cells[index].firstElementChild.dataset.color;
                    let type = cells[index].firstElementChild.dataset.type;
                    tmp.push([color, type]);
                } else {
                    tmp.push('');
                }
                ++index;
            }
            matrix.push(tmp);
        }
        document.matrix = matrix;
    },

    mapDiagonalMoves : function (yCor, xCor, yIncr, xIncr) {
        let validMoves = [];
        while (true) {
            let cell = document.querySelector(`.cell[data-ycor="${yCor}"][data-xcor="${xCor}"]`);
            if(cell){
                validMoves.push(cell);
            } else {
                //return validMoves;
                break;
            }
            yCor += yIncr;
            xCor += xIncr;
        }
        console.log(validMoves);
    }

};