/*
==========
CHALLENGE
==========
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

/*
===========
SOLUTION 1
===========
*/
const arrayPlusArray = (arr1, arr2) => arr1.reduce((sum, num) => sum + num, 0) + arr2.reduce((sum, num) => sum + num, 0);

/*
===========
SOlUTION 2
===========
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((sum, num) => sum + num, 0);
*/

/*
===========
SOlUTION 3
===========
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((sum, num) => sum + num, 0);
*/