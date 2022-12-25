/*
==========
CHALLENGE
==========
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

/*
===========
SOLUTION 1
===========
*/
const reverseWords = str => str.split(' ').reverse().join(' ');

/*
===========
SOLUTION 2
===========
const reverseWords = str => {
  const strToArr = str.split(' ');
  
  let output = '';
  
  for(let i = strToArr.length - 1; i >= 0; i--) {
    output += strToArr[i];
    
    if(i !== 0) output += ' ';
  }
  
  return output;
}
*/