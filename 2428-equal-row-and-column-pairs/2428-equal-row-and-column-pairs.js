/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    let rows = {};

    for (let i = 0; i < grid.length; i++) {
      let rowStr = grid[i].join(',');
      rows[rowStr] = (rows[rowStr] || 0) + 1;
    }

    for (let j = 0; j < grid.length; j++) {
      let colStr = '';
      for (let k = 0; k < grid.length; k++) {
        colStr += grid[k][j];
        if (k < grid.length - 1) colStr += ',';
      }

      if (rows[colStr] !== undefined) {
        count += rows[colStr]
      }
    }
    return count;
};

// grid = [
//      c 0 1 2
// r0    [3,2,1],
// r1    [1,7,6],
// r2    [2,7,7]
//     ]
