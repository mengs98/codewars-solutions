/*
==========
CHALLENGE
==========
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

/*
===========
SOLUTION 1
===========
*/
const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((total, point) => total + point, yourPoints) / (classPoints.length + 1);

/*
===========
SOLUTION 2
===========
const betterThanAverage = (classPoints, yourPoints) => {
  const classPointsArr = [...classPoints];
  classPointsArr.push(yourPoints);
    
  const classPointsSum = classPointsArr.reduce((total, point) => total + point);
  const classPointsAvg = classPointsSum / classPointsArr.length;
    
  return yourPoints > classPointsAvg;
}
*/