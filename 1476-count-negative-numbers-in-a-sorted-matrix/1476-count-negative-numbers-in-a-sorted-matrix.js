/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let count = 0;

    for (let row of grid) {    
        for (let i = 0; i < row.length; i++) {
            let last = row.length - 1;

            if (row[0] >= 0 && row[last] >= 0) {
                break;
            } else if (row[i] < 0 && row[last] < 0) {
                count += row.length - i;
                break;
            }
        }
    }
    return count;
};
// grid = [
//     [4,3,2,-1],
//     [3,2,1,-1],
//     [1,1,-1,-2],
//     [-1,-1,-2,-3]
//     ]