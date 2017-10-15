//requirements for assignment

// 15	onclick handlers for all table cells- done
// 20	Modifies the contents and style of a cell that the user clicks -checked
// 20	Displays a message in the document (not an alert) that includes the table cell coordinates -checked
// 10	Uses required elements (text field, select, button) -done
// 15	Uses alerts or debugging div to show that input elements work -checked- I think I did this to get to the final part
// 20	Uses JS and CSS to position and animate an HTML element -checked
// 25	Includes a checkpoint.html file with progress report -checked
// 125	TOTAL


//initiate table row and table data variables
var tr = [];
var td = [];
var img = [];


var content = [];

var imageUrl = {

    pawnsBlack: 'images/chessPieces/pawnBlack.png',
    pawnsWhite: 'images/chessPieces/pawnWhite.png',
    rookBlack: 'images/chessPieces/rookBlack.png',
    rookWhite: 'images/chessPieces/rookWhite.png',
    knightBlack: 'images/chessPieces/knightBlack.png',
    knightWhite: 'images/chessPieces/knightWhite.png',
    bishopBlack: 'images/chessPieces/bishopBlack.png',
    bishopWhite: 'images/chessPieces/bishopWhite.png',
    queenBlack: 'images/chessPieces/queenBlack.png',
    queenWhite: 'images/chessPieces/queenWhite.png',
    kingBlack: 'images/chessPieces/kingBlack.png',
    kingWhite: 'images/chessPieces/kingWhite.png'

};



var table = document.createElement("table");


//requirements for assignment

// 15	onclick handlers for all table cells- done
// 20	Modifies the contents and style of a cell that the user clicks -checked
// 20	Displays a message in the document (not an alert) that includes the table cell coordinates -checked
// 10	Uses required elements (text field, select, button) -done
// 15	Uses alerts or debugging div to show that input elements work -checked- I think I did this to get to the final part
// 20	Uses JS and CSS to position and animate an HTML element -checked
// 25	Includes a checkpoint.html file with progress report -checked
// 125	TOTAL



function clickHandler(){
    var cells = document.getElementsByTagName('td');

    for (t = 0; t < cells.length; t++){
        cells[t].onclick = function(){

            if(t > 2){
                //I couldn't help it.
                $('h1').remove();
                $(cells).removeClass('clicked');


            }
                cells.className = 'clicked';
                var column = this.cellIndex;
                var row = this.parentNode.rowIndex;
                var cell = table.rows[row].cells[column];
                cell.className += ' clicked';
                setHTML(column, row);



        }
    }
}
function setHTML(x, y){

    var h1 = document.createElement('h1');
    h1.className = 'chessboard';
    document.body.append(h1);
    h1.innerHTML = gameState.getSquare(x, y);



}

function classRemove(elem){
    var classTog = document.getElementsByTagName(elem);
    classTog.classList.toggle('clicked');
}







function initTable() {

    document.body.append(table);

    for (r = 0; r < 8; r++)
    {

        tr = document.createElement("TR");
        table.append(tr);
        for (c = 0; c < 8; c++)
        {
            td = document.createElement("TD");
            tr.append(td);
            img = document.createElement('img');
            td.append(img);
            content = gameState.assignImage(r, c);
            img.src = content;

            if ((r % 2 == 1 && c % 2 == 0) || (r % 2 == 0 && c % 2 == 1))
            {


                td.className = 'brown ';
            }
            else{

                td.className = "white ";
            }
            var test = gameState.getSquare(r, c);
            td.className += test;

        }
    }

}



document.addEventListener("DOMContentLoaded", function(event) {

        initTable();
        clickHandler();

});


