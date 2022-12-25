/*
==========
CHALLENGE
==========
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

/*
===========
SOLUTION 1
===========
*/
const solution = str => str.split('').reverse().join('');

/*
===========
SOLUTION 2
===========
const solution = str => {
  let reversedStrInArr = [];
  
  str.split('').forEach(char => reversedStrInArr.unshift(char));
  
  const reversedStr = reversedStrInArr.join('');
  
  return reversedStr;
}
*/

/*
===========
SOLUTION 3
===========
const solution = str => {
  let reversedStr = '';
  
  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  return reversedStr;
}
*/

/*
===========
SOLUTION 4
===========
Using rest operator

const solution = str => [...str].reverse().join('');
*/