/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let k = 0; // to overwrite the original array
    let count = 1; // count of consecutive characters

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            chars[k++] = chars[i];
            if (count > 1) {
                let countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars[k++] = countStr[j];
                }
            }
            count = 1; // reset count
        }
    }
    return k;
};


// k = 1
//                               k
// chars = ["a","a","b","b","c","c","c"]
// i         0.  1.  2.  3.  4.  5.  6
//               x   x   x.  x.  x.  x
// let base = chars[0]
// if chars[i] !== base
// base = char[i]
// char[k] = count; k+2


// if chars[i] == base
// count++

