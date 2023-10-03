/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let seen = new Set();
    let sum = 0;
    let col = 0;

    for (let row = 0; row < mat.length; row++) {
        sum += mat[row][col];
        seen.add([row,col].toString());
        col++;
    }

    col = 0;

    for (let row = mat.length - 1; row >= 0; row--) {
        if (!seen.has(`${row},${col}`)) {
            sum += mat[row][col];
        }
        col++;
    }
    return sum;
};

