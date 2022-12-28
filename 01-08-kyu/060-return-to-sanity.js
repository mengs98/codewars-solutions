/*
==========
CHALLENGE
==========
This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
*/

/*
===========
SOLUTION 1
===========
*/
const mystery = () => ({ sanity: 'Hello' });

/*
===========
SOLUTION 2
===========
function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}
*/