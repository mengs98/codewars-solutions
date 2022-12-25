/*
==========
CHALLENGE
==========
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

/*
===========
SOLUTION 1
===========
Return a new string from the original string starting from index 1 up to index -1 (str.length - 1). The char with index -1 is not included in the returned string
*/
const removeChar = str => str.slice(1, -1);