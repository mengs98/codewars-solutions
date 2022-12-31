/*
==========
CHALLENGE
==========
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/

/*
=========
SOLUTION
=========
*/
const solution = num => {
  // add a variable that stores an initial value
  let output = 0;

  // if num is less than 0, simply return 0
  if(num <= 0) return 0;
    
  // loop num from 3 (because we only search for multiples of 3 or 5, just skip the numbers that precede it) up to num (exclusive i.e. don't include the value of num)
  // only add those numbers which multiples of 3 or 5 or both
  for(let i = 3; i < num; i++) {
    output += i % 3 === 0 || i % 5 === 0 ? i : 0;
  }
    
  return output;
}