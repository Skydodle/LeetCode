/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let flipped = Array(matrix[0].length).fill(null).map(() => []);
    // result should have col length not row length
    
    for (let i = 0; i < matrix.length; i++) {
        let row =  matrix[i];

        for (let j = 0; j < row.length; j++) {
            flipped[j].push(row[j])
        }
    }
   return flipped;
};

   
    //    [1,2,3],
    //    [4,5,6],
    //    [7,8,9]
       
    //    [1,4,7],
    //    [2,5,8],
    //    [3,6,9]

    // [] [] []
    //. 0. 1  2
       