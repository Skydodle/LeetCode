/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = Array(n).fill();

    for (let i = 0; i < n; i++) {
        let j = i + 1;
        if ( j % 3 === 0 && j % 5 === 0) {
            answer[i] = "FizzBuzz";
        } else if (j % 3 === 0) {
            answer[i] = "Fizz";
        } else if (j % 5 === 0) {
            answer[i] = "Buzz";
        } else {
            answer[i] = `${j}`
        }
    }

    return answer
};   