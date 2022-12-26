/*
==========
CHALLENGE
==========
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

/*
===========
SOLUTION 1
===========
*/
const isIsogram = str => str.length === new Set(str.toLowerCase()).size;

/*
===========
SOLUTION 2
===========
const isIsogram = str => {
  let base = '';
    
  for(let char of str.toLowerCase()) {
    if(base.includes(char)) return false;
    base += char;
  }
    
  return true;
}
*/