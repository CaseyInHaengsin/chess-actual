//model
//includes gamestate, how people can move and capture



var gameState =  {


    turn: 2,

    getSquare: function(row, col){
        if ((row > 7 || col > 7) || (row < 0 || col < 0))
        {
            alert("Out of bounds!");
        }
        else return this.grid[row][col];
    },

    assignImage: function(r, c){

        if ((r > 7 || c > 7) || (r < 0 || c < 0)){
            alert("Out of bounds!");
        }
        else{
            return gameState.gridImage[r][c];

        }


    },

    grid: [['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'],
        ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
        ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6'],
        ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5',  'H5'],
        ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4',  'H4'],
        ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
        ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2',  'H2'],
        ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1',  'H1']],


    gridImage:  [[imageUrl.rookBlack, imageUrl.knightBlack, imageUrl.bishopBlack, imageUrl.queenBlack, imageUrl.kingBlack, imageUrl.bishopBlack, imageUrl.knightBlack, imageUrl.rookBlack],
        [imageUrl.pawnsBlack, imageUrl.pawnsBlack, imageUrl.pawnsBlack, imageUrl.pawnsBlack, imageUrl.pawnsBlack, imageUrl.pawnsBlack, imageUrl.pawnsBlack, imageUrl.pawnsBlack],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        [imageUrl.pawnsWhite, imageUrl.pawnsWhite, imageUrl.pawnsWhite, imageUrl.pawnsWhite, imageUrl.pawnsWhite, imageUrl.pawnsWhite, imageUrl.pawnsWhite, imageUrl.pawnsWhite],
        [imageUrl.rookWhite, imageUrl.knightWhite, imageUrl.bishopWhite, imageUrl.queenWhite, imageUrl.kingWhite, imageUrl.bishopWhite, imageUrl.knightWhite, imageUrl.rookWhite]],






}