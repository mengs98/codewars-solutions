/*
==========
CHALLENGE
==========
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
    '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

/*
=========
SOLUTION
=========
*/
const toCsvText = arr => {
  let output = '';
    
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      output += arr[i][j];
        
      output += j !== arr[i].length - 1 ? ',' : '';
    }
    
    output += i !== arr.length - 1 ? '\n' : '';
  }
    
  return output;
}

/*
===========
SOLUTION 2
===========
const toCsvText = arr => arr.join('\n');
*/