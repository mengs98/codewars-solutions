/*
==========
CHALLENGE
==========
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

/*
===========
SOLUTION 1
===========
*/
const XO = str => str.replace(/o/gi, '').length === str.replace(/x/gi, '').length;

/*
===========
SOLUTION 2
===========
const XO = str => {
  const loweredStr = str.toLowerCase();
  let numOfO = 0;
  let numOfX = 0;
    
  if(!loweredStr.includes('o') && !loweredStr.includes('x')) return true;
    
  for(let char of loweredStr) {
    if(char === 'o') numOfO += 1;
    if(char === 'x') numOfX += 1;
  }
  
  return numOfO === numOfX;
}
*/