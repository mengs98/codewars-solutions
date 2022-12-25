/*
==========
CHALLENGE
==========
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

/*
===========
SOLUTION 1
===========
In one line
*/
const positiveSum = arr => arr.reduce((total, num) => total + (num > 0 ? num : 0), 0);

/*
===========
SOLUTION 2
===========
const positiveSum = arr => {
  let sum = 0;
    
  arr.forEach(num => num > 0 ? sum += num : sum += 0);
    
  return sum;
}
*/

/*
===========
SOLUTION 3
===========
const positiveSum = arr => {
  let sum = 0;
  
  for(let num of arr) {
    if(num > 0) sum += num;
  }
  
  return sum;
}
*/

/*
===========
SOLUTION 4
===========
const positiveSum = arr => {
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) sum += arr[i];
  }
  
  return sum;
}
*/