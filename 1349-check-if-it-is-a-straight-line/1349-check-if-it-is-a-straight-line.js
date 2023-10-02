/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x = coordinates[1][0] - coordinates[0][0];
    let y = coordinates[1][1] - coordinates[0][1];

    if (x === 0) {
        // Special case: vertical line
        for (let i = 1; i < coordinates.length; i++) {
            if (coordinates[i][0] !== coordinates[0][0]) return false;
        }
        return true;
    }

    let slope = y / x;

    for (let i = 1; i < coordinates.length; i++) {
        let curr = coordinates[i];
        let prev = coordinates[i - 1];
        let xDiff = curr[0] - prev[0];
        let yDiff = curr[1] - prev[1];

        if (xDiff === 0) {
            // Another vertical line, but initial wasn't vertical
            return false;
        }

        let currSlope = yDiff / xDiff;

        if (currSlope !== slope) return false;
    }

    return true;
};
