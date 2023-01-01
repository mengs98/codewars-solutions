/*
==========
CHALLENGE
==========
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

/*
===========
SOLUTION 1
===========
*/
const highAndLow = numbers => {
  // split numbers (type string) into an array of numbers (type int)
  const numsInArr = numbers.split(' ').map(num => +num);
  
  // use built-in Math methods: Math.max() and Math.min()
  // spread array's elements to be the Math method's argument
  const highest = Math.max(...numsInArr);
  const lowest = Math.min(...numsInArr);
  
  // return output
  return `${highest} ${lowest}`;
}

/*
===========
SOLUTION 2
===========
const highAndLow = numbers => {
  const numsAsArr = numbers.split(' ').map(Number);
  const sortedNums = numsAsArr.sort((a, b) => a - b);
  
  return `${sortedNums[sortedNums.length - 1]} ${sortedNums[0]}`;
}
*/