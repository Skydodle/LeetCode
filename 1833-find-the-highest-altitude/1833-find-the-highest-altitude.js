/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = [0];
    let highest = -Infinity;

    for (let i = 0; i < gain.length; i++){
        altitude.push(gain[i] + altitude[i]);
    }

    for (let j = 0 ; j < altitude.length; j++){
        highest = Math.max(highest, altitude[j]);
    }

    return highest;
};


 
// point   0  1  2  3  4
// gain  [-5, 1, 5, 0,-7]
// alt [0,-5,-4, 1, 1,-6]
//.     0  1. 2  3  4  5