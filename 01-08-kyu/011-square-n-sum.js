/*
==========
CHALLENGE
==========
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

/*
===========
SOLUTION 1
===========
*/
const squareSum = numbers => numbers.reduce((total, num) => total + num ** 2, 0);

/*
===========
SOLUTION 2
===========
const squareSum = numbers => numbers.map(num => Math.pow(num, 2)).reduce((total, num) => total + num, 0);
*/

/*
===========
SOLUTION 3
===========
const squareSum = numbers => {
  let result = 0;
  
  for(let num of numbers) {
    result += num ** 2;
  }
  
  return result;
}
*/