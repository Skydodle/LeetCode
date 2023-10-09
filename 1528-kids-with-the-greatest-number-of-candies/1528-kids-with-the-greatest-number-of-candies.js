/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = candies[0];

    for (let num of candies) {
        greatest = Math.max(num, greatest)
    }

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest) {
            candies[i] = true;
        } else {
            candies[i] = false;
        }
    }

    return candies
};