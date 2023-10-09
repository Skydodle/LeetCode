/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {  
            if (grid[i][j] === 1) {
                // if curr is left most col or curr's left is 0
                if (j === 0 || grid[i][j - 1] !== 1) perimeter++;
                // if curr is top most row or curr's top is 0
                if (i === 0 || grid[i - 1][j] !== 1) perimeter++;
                // if curr is right most col or curr's right is 0
                if (j === grid[i].length - 1 || grid[i][j + 1] !== 1) perimeter++;
                // if curr is bottom most row or curr's bottom is 0
                if (i === grid.length - 1 || grid[i + 1][j] !== 1) perimeter++;
            }
        }
    }
    return perimeter;
};
// Time: O(row x col)
// Space: O(1)

// grid = [
//     [0,1,0,0],
//     [1,1,1,0],
//     [0,1,0,0],
//     [1,1,0,0]
//     ]