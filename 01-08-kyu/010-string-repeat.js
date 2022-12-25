/*
==========
CHALLENGE
==========
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

/*
===========
SOLUTION 1
===========
*/
const repeatStr = (n, s) => s.repeat(n);

/*
===========
SOLUTION 2
===========
const repeatStr = (n, s) => {
  let output = '';
  
  for(let i = 1; i <= n; i++) {
    output += s;
  }
  
  return output;
}
*/