/*
==========
CHALLENGE
==========
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

/*
===========
SOLUTION 1
===========
*/
const countPositivesSumNegatives = input => {
  let output = [];
    
  if(input !== null && input.length > 0) {
    const countPositives = input.filter(num => num > 0).length;
    const sumNegatives = input.reduce((total, num) => total + (num < 0 ? num : 0), 0);
      
    output[0] = countPositives;
    output[1] = sumNegatives;
  }
    
  return output;
}