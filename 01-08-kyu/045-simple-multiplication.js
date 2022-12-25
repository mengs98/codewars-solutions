/*
==========
CHALLENGE
==========
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

/*
===========
SOLUTION 1
===========
*/
const simpleMultiplication = num => num * (num % 2 ? 9 : 8);

/*
===========
SOLUTION 2
===========
const simpleMultiplication = num => num % 2 ? num * 9 : num * 8;
*/