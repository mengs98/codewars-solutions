/*
==========
CHALLENGE
==========
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

/*
===========
SOLUTION 1
===========
*/
const squareDigits = num => {
  // set initial value to an empty string
  let result = '';
    
  // convert num (typeof int) to string
  const numAsStr = `${num}`;
    
  // loop over the string, convert it to integer and square it
  for(let digit of numAsStr) {
    const squaredDigit = digit ** 2;
      
    // add to result as part of the string
    result += squaredDigit;
  }
    
  // return result as integer
  return +result;
}

/*
===========
SOLUTION 2
===========
In one line

const squareDigits = num => (+`${num}`.split('').reduce((acc, curr) => acc + `${curr ** 2}`, ''));

const squareDigits = num => +(`${num}`.split('').map(digit => (+digit) ** 2).join(''));
*/