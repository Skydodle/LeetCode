/**
 * @param {number[][]} grid
 * @return {number}
 */
// var countNegatives = function(grid) {

//     let count = 0;

//     for (let row of grid) {    
//         for (let i = 0; i < row.length; i++) {
//             let last = row.length - 1;

//             if (row[0] >= 0 && row[last] >= 0) { // if both front and end are positive, discard array
//                 break;
//             } else if (row[i] < 0 && row[last] < 0) { // if front positive, move to next until negative
//                 count += row.length - i;
//                 break;
//             }
//         }
//     }
//     return count;
// }; // Time: O(m * n) Space; O(1)


// grid = [
//     [ 4, 3, 2,-1],
//     [ 3, 2, 1,-1],
//     [ 1, 1,-1,-2],
//     [-1,-1,-2,-3]
//     ]

var countNegatives = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  let r = height - 1;
  let c = 0;
  let res = 0;
  while (r >= 0 && c < width) {
    if (grid[r][c] >= 0) {
      c++;
    } else {
      res += width - c;
      r--;
    }
  }
  return res;
};