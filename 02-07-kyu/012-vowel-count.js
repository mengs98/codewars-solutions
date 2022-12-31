/*
==========
CHALLENGE
==========
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

/*
===========
SOLUTION 1
===========
*/
const getCount = str => {
  // set initial value
  let count = 0;
    
  // loop over the str, get each char and test whether char is a vowel
  // if vowel, add 1 to count
  for(let char of str) {
    count += /[aeiou]/.test(char) ? 1 : 0;
  }
    
  return count;
}

/*
===========
SOLUTION 2
===========
In one line
const getCount = str => str.split('').reduce((count, char) => count += /[aeiou]/.test(char) ? 1 : 0, 0);

const getCount = str => (str.match(/[aeiou]/g) || []).length;
*/

/*
=====
TEST
=====
*/
console.log(getCount("abracadabra")); // 5