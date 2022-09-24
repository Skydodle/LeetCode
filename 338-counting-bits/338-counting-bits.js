/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  // create an output array
  // iterate from 0 to n
    // declare a value set to 0
    // translate each element into 2 based binaries
    // iterate through the binaries
      // add each bit to value
    // push value to output
  // return output
  
  const output = [];
  
  for (let i = 0 ; i <= n; i++) {
    let value = 0;
    const binary = i.toString(2);
    for (let j = 0; j < binary.length; j++) {
      value += Number(binary[j]);
    }
    output.push(value);
  }
  return output;
};
