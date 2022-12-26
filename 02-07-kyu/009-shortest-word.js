/*
==========
CHALLENGE
==========
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

/*
=========
SOLUTION
=========
*/
const findShort = str => str.split(' ').sort((a, b) => a.length - b.length)[0].length;