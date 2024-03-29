/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function(flowerbed, n) {

//     let count = 0;
//     if (flowerbed.length === 1 && flowerbed[0] === 0) count = 1;

//     for (let i = 0; i < flowerbed.length; i++) {
//       if (flowerbed[i] === 0) {
//         if (
//           (i === 0 && flowerbed[i + 1] === 0) || 
//           (flowerbed[i+1] === 0 && flowerbed[i-1] === 0)
//           ) {
//           count++;
//           flowerbed[i] = 1;
//         } 
//         if (i === flowerbed.length -1 && flowerbed[i - 1] === 0) count++;
//       }
//     }
//     return count >= n;
// };

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
  }
  return n === 0;
};