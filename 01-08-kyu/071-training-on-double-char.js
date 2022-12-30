/*
==========
CHALLENGE
==========
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

/*
=========
SOLUTION
=========
*/
const doubleChar = str => str.split('').map(char => char.repeat(2)).join('');