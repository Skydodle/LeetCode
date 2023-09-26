/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */

const daysBetweenDates = (date1, date2) => {
    const millisecondsInADay = 1000*60*60*24;    
    return Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInADay);
}

// Calculate number of days from 1st Jan, 1990 to date1, number of days from 1st Jan, 1990 to date2. Then return the difference between the no of days.

// let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// // https://www.wikihow.com/Calculate-Leap-Years
// var isLeapYear = function(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0)
//                 return true;
//             else
//                 return false;
//         }
//         else if (year % 100 !== 0)
//             return true;
//         else
//             return false;
//     }
    
//     return false;
// } 

// var daysFrom1990 = function(year, month, day) {
//     let noOfDays = 0
//     for (let i = 1900; i < year; ++i) {
//         if (isLeapYear(i))
//             noOfDays += 366;
//         else
//             noOfDays += 365
//     }
    
//     for (let i = 1; i < month; ++i) {
//         noOfDays += months[i];
//         if (i === 2 && isLeapYear(year))
//             noOfDays += 1;
//     }
    
//     noOfDays += day;

//     return noOfDays;
// }

// var daysBetweenDates = function(date1, date2) {
//     let noOfDays1 = 0;
//     let noOfDays2 = 0;
//     let [year1, month1, day1] = date1.split("-").map(str=>Number(str));
//     let [year2, month2, day2] = date2.split("-").map(str=>Number(str));
    
//     noOfDays1 = daysFrom1990(year1, month1, day1);
//     noOfDays2 = daysFrom1990(year2, month2, day2);
    
//     return Math.abs(noOfDays1 - noOfDays2);
// };