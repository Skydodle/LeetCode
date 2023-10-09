/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = Array.from(s);  // Convert string to an array
    
    for (let start = 0, end = arr.length - 1; start < end;) {
        if (!arr[start].match(/[aeiouAEIOU]/g)) {
            start++;
            continue;
        }
        if (!arr[end].match(/[aeiouAEIOU]/g)) {
            end--;
            continue;
        }

        // Swap vowels
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        start++;
        end--;
    }

    return arr.join('');  // Convert array back to string
};
