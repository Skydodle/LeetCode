/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
   
   // convert to number's bit value using 2 based toString
   function numOfBits(num) {
       const bits = num.toString(2).match(/1/g); // produce an array of 1s from the bit value
       return bits ? bits.length : 0 // return total number of 1s
   }
    
   // sort by count of 1s, if equal sort by original value
   return arr.sort((a, b) => numOfBits(a) - numOfBits(b) || a - b);   
};

// Time: sort() O(N log N)
// Space: O(1)