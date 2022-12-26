/*
==========
CHALLENGE
==========
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

/*
===========
SOLUTION 1
===========
*/
const accum = s => s.split('').map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx)).join('-');

/*
===========
SOLUTION 2
===========
const accum = s => s.toLowerCase().split('').reduce((acc, curr, idx) => acc + (idx !== 0 && idx !== -1 ? '-' : '') + `${curr.repeat(idx + 1)}`, '').split('-').map(char => `${char[0].toUpperCase()}${char.slice(1)}`).join('-');
*/

/*
===========
SOLUTION 3
===========
const accum = s => {
  const strToArrLowerCase = s.toLowerCase().split('')
  const transformedStr = strToArrLowerCase.map((char, idx) => {
    let repeatedChar = char.repeat(idx + 1);
    repeatedChar = repeatedChar[0].toUpperCase() + repeatedChar.slice(1);
    
    return repeatedChar;
  }).join('-');

  return transformedStr;
}
*/