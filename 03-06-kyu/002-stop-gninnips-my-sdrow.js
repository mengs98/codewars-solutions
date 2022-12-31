/*
==========
CHALLENGE
==========
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

/*
===========
SOLUTION 1
===========
*/
const spinWords = str => {
  // set initial value
  let output = '';
  
  // split the string into several words in an array
  const strAsArr = str.split(' ');
  
  // loop over the array
  for(let word of strAsArr) {
    // if an array's element's length >= 5, then reverse and concatenate to the initial value
    // else, concatenate to the initial value directly
    output += word.length >= 5 ? word.split('').reverse().join('') : word;
    // add space between each word
    output += ' ';
  }
  
  // return the trimmed string (we add a space after adding word to output, so we have one more space after the last word)
  return output.trim();
}

/*
===========
SOLUTION 2
===========
In one line

const spinWords = str => str.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
*/