/*
==========
CHALLENGE
==========
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

/*
===========
SOLUTION 1
===========
*/
const numberToString = num => `${num}`;

/*
===========
SOLUTION 2
===========
const numberToString = String;
*/

/*
===========
SOLUTION 3
===========
const numberToString = num => num.toString();
*/

/*
===========
SOLUTION 4
===========
const numberToString = num => num + '';
*/