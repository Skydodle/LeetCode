/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let colMax = new Array(matrix[0].length).fill(Number.MIN_SAFE_INTEGER);
    let rowMin = [];
    let luckyNums = [];

    // Find row minimums
    for (let row = 0 ; row < matrix.length; row++) {
        let smallest = Infinity;

        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] < smallest) smallest = matrix[row][col];
        }

        rowMin.push(smallest);
    }

    // Find column maximums
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][col] > colMax[col]) {
                colMax[col] = matrix[row][col];
            }
        }
    }

    // Find lucky numbers
    for (let i = 0; i < rowMin.length; i++) {
        let index = colMax.indexOf(rowMin[i]);
        if (index !== -1) {
            luckyNums.push(rowMin[i]);
        }
    }

    return luckyNums;
};


// [3, 7,8],
// [9,11,13],
// [15,16,17]

// [1, 10,4, 2],
// [9, 3, 8, 7],
// [15,16,17,12]