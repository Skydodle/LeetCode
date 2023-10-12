/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let k = 0;  // Pointer for writing into the array
    let count = 1;  // Count of the character being counted

    for (let i = 0; i < chars.length; i++) {
        // Check for the end of a group of repeating characters or the end of the array
        if (i === chars.length - 1 || chars[i] !== chars[i + 1]) {
            // Write the character and possibly the count into the array
            chars[k++] = chars[i];
            if (count > 1) {
                const countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars[k++] = countStr[j];
                }
            }
            
            // Reset the count
            count = 1;
        } else {
            // Increment the count for the current group of repeating characters
            count++;
        }
    }

    // Trim the array to its new length
    chars.length = k;
    return k;
};


// k = 0
//           k                    
// chars = ["a","a","b","b","c","c","c"]
// i         0.  1.  2.  3.  4.  5.  6
//           x.  x
// newChars. a              
// count     2
// if chars[i] !== chars[i + 1]
// chars[k] = chars[i]; k++;
// if count > 1
// chars[k] = count;
// k++;
// count = 1


// else if chars[i] === chars[i + 1]
// count++

