/*
==========
CHALLENGE
==========
Let's play! You have to return which player won! In case of a draw return Draw!.

Note:
scissors beats paper
paper beats rock
rock beats scissors

Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

/*
=========
SOLUTION
=========
*/
const rps = (p1, p2) => {
  if(p1 === p2) return 'Draw!';
  if(p1 === 'scissors') return `Player ${p2 === 'paper' ? 1 : 2} won!`;
  if(p1 === 'rock') return `Player ${p2 === 'scissors' ? 1 : 2 } won!`;
  if(p1 === 'paper') return `Player ${p2 === 'rock' ? 1 : 2} won!`;
}