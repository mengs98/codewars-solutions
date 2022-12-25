/*
==========
CHALLENGE
==========
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

35231 => [1,3,2,5,3]
0 => [0]
*/

/*
===========
SOLUTION 1
===========
*/
const digitize = n => `${n}`.split('').map(item => +item).reverse();

/*
===========
SOLUTION 2
===========
const digitize = n => String(n).split('').reverse().map(Number);
*/

/*
===========
SOLUTION 3
===========
const digitize = n => {
  const convertedNumToStr = `${n}`;
  let reversedDigitsInArr = [];
  
  for(let i = convertedNumToStr.length - 1; i >= 0; i--) {
    reversedDigitsInArr.push(+convertedNumToStr[i]);
  }
  
  return reversedDigitsInArr;
}
*/