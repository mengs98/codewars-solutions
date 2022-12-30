/*
==========
CHALLENGE
==========
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

/*
=========
SOLUTION
=========
*/
const sumMix = x => x.reduce((sum, num) => sum + +num, 0);