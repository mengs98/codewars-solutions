/*
==========
CHALLENGE
==========
Create a function that takes an integer as an argumentand returns "Even" for even numbers or "Odd" for odd numbers.
*/

/*
===========
SOLUTION 1
===========
const evenOrOdd = num => num % 2 === 0 ? 'Even' : 'Odd';
*/

/*
===========
SOLUTION 2
===========
num % 2 equal to 0 (falsy) for even numbers, so below code will returns 'Even' for every argument that has even number.
*/
const evenOrOdd = num => num % 2 ? 'Odd' : 'Even';