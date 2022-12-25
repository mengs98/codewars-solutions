/*
==========
CHALLENGE
==========
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

/*
===========
SOLUTION 1
===========
*/
const reverseSeq = n => Array(n).fill(0).map((num, idx) => n - idx);

/*
===========
SOLUTION 2
===========
const reverseSeq = n => {
  let output = [];
    
  for(let i = n; i > 0; i--) output.push(i);
    
  return output;
}
*/