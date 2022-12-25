/*
==========
CHALLENGE
==========
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

/*
=========
SOLUTION
=========
*/
const findAverage = arr => arr.length === 0 ? 0 : arr.reduce((total, num) => total + num, 0) / arr.length;