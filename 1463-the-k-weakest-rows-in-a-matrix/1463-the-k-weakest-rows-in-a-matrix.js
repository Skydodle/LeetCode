/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let soldiers = []; // holds the count of soldiers for each row

    // Iterate thru each row and track the soldier count
    for (let i = 0; i < mat.length; i++) {
        let row = mat[i];
        let count = 0;

        for (let j = 0; j < row.length; j++) {
            if (row[j] === 1) {
                count++;
            } else {
                break; // quit this row on first 0
            }
        }
        soldiers.push(count);
    }

    // Create the idx array
    let sortIdx = [];

    for (let i = 0; i < soldiers.length; i++) {
        sortIdx.push(i);
    }

    sortIdx.sort((a, b) => {
        if (soldiers[a] === soldiers[b]) return a - b; // if same value, sort by idx
        return soldiers[a] - soldiers[b] // else sort by value
    })

    return sortIdx.slice(0, k)
};
