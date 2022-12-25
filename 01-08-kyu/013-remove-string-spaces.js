/*
==========
CHALLENGE
==========
Simple, remove the spaces from the string, then return the resultant string.
*/

/*
===========
SOLUTION 1
===========
*/
const noSpace = x => x.replace(/\s/g, '');

/*
===========
SOLUTION 2
===========
const noSpace = x => x.split(' ').join('');
*/

/*
===========
SOLUTION 3
===========
const noSpace = str => {
  let output = '';
  
  for(let char of str) {
    if(char !== ' ') output += char;
  }
  
  return output;
}
*/