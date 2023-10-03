/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let winner;
    if (moves.length < 9 && winner === undefined) winner = "Pending";

    let grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    for (let i = 0; i < moves.length; i++) {
        let x = moves[i][0];
        let y = moves[i][1];

        if (i % 2 === 0) {
            grid[x][y] = 'X';
        } else {
            grid[x][y] = 'O';
        }
    }

    for (let row = 0; row < grid.length; row++) {
        let rowWin = grid[row][0];
        let colWin = grid[0][row];
        
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] !== rowWin) {
                rowWin = null;
            }
            if (grid[col][row] !== colWin) {
                colWin = null;
            }
        }
        
        if (rowWin !== null) return rowWin === 'X' ? 'A' : 'B';
        if (colWin !== null) return colWin === 'X' ? 'A' : 'B';
    }

    // Check diagonals using loops
    let diag1 = grid[0][0], diag2 = grid[0][2];
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][i] !== diag1) {
            diag1 = null;
        }
        if (grid[i][grid.length - 1 - i] !== diag2) {
            diag2 = null;
        }
    }

    if (diag1 !== null) return diag1 === 'X' ? 'A' : 'B';
    if (diag2 !== null) return diag2 === 'X' ? 'A' : 'B';

    return moves.length === 9 ? "Draw" : "Pending";
};


// x _ _
// _ x _
// o o x
