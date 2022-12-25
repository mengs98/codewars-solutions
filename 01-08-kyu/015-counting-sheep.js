/*
==========
CHALLENGE
==========
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

/*
===========
SOLUTION 1
===========
*/
const countSheeps = arrayOfSheep => arrayOfSheep.reduce((total, exist) => total + (exist ? 1 : 0), 0);

/*
===========
SOLUTION 2
===========
const countSheeps = arrayOfSheep => arrayOfSheep.filter(Boolean).length;
*/

/*
===========
SOLUTION 3
===========
const countSheeps = arrayOfSheep => {
  let output = 0;
  
  for(let sheep of arrayOfSheep) {
    if(sheep) output += 1;
  }
  
  return output;
}
*/