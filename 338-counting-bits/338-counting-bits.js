/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  // create a output storage array
  let output = [];
  // loop the input n from 0
  for (let i = 0; i <= n; i++) {
    // declare value set to 0
    let value = 0;
    // declare binaryString and assign it to the binary value of current number in outer loop
    const binaryString = i.toString(2);
    // loop thru each binary in binaryString
    for (let j = 0; j < binaryString.length; j++) {
      // add each binary to value; the addition outcome would be the number of 1s for this i
      value += Number(binaryString[j])
    }
    // push value to output array, restart outter loop on the next i
    output.push(value);
  }   
  // return the output array
  return output;
};
