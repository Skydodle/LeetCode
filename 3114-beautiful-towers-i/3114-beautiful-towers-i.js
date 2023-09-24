/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function(maxHeights) {
    let n = maxHeights.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let heights = Array(n).fill(1);
        let peakIdx = i;
        
        heights[peakIdx] = maxHeights[peakIdx];

        // Constructing the left (increasing) side of the mountain
        for (let j = peakIdx - 1; j >= 0; j--) {
            heights[j] = Math.min(heights[j + 1], maxHeights[j]);
        }

        // Constructing the right (decreasing) side of the mountain
        for (let j = peakIdx + 1; j < n; j++) {
            heights[j] = Math.min(heights[j - 1], maxHeights[j]);
        }

        const sum = heights.reduce((acc, val) => acc + val, 0);
        result = Math.max(result, sum);
    }

    return result;
};
