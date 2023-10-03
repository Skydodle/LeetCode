/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let col = 0;

    for (let row = 0; row < mat.length; row++) {
        sum += mat[row][col];
        col++;
    }

    col = 0;

    for (let row = mat.length - 1; row >= 0; row--) {
        if (row !== col) {
            sum += mat[row][col];
        }
        col++;
    }
    return sum;
};

