/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let soldiers = [];

    for (let i = 0; i < mat.length; i++) {
        let row = mat[i];
        let count = 0;
        // console.log(row)

        for (let j = 0; j < row.length; j++) {
            if (row[j] === 1) {
                count++;
            }
        }
        soldiers.push(count);
    }

    let sortIdx = [];

    for (let i = 0; i < soldiers.length; i++) {
        sortIdx.push(i);
    }

    sortIdx.sort((a, b) => {
        if (soldiers[a] === soldiers[b]) return a - b;
        return soldiers[a] - soldiers[b]
    })

    return sortIdx.slice(0, k)
};

//  [1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]]