/*
==========
CHALLENGE
==========
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
If you want to know more: http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

/*
===========
SOLUTION 1
===========
*/
const DNAStrand = dna => dna.split('').map(symbol => symbol === 'A' ? 'T' : symbol === 'T' ? 'A': symbol === 'C' ? 'G' : 'C').join('');

/*
===========
SOLUTION 2
===========
const DNAStrand = dna => {
  let output = '';
  
  for(let symbol of dna) {
    switch(symbol) {
        case 'A':
          output += 'T';
          break;
        case 'T':
          output += 'A';
          break;
        case 'C':
          output += 'G';
          break;
        case 'G':
          output += 'C';
          break;
    }
  }
  return output;
}
*/