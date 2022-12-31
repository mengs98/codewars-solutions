/*
==========
CHALLENGE
==========
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

/*
=========
SOLUTION
=========
*/
const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');