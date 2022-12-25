/*
==========
CHALLENGE
==========
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

/*
===========
SOLUTION 1
===========
*/
const bmi = (weight, height) => {
  const bmiResult = weight / Math.pow(height, 2);
    
  return bmiResult <= 18.5 ? 'Underweight'
    : bmiResult <= 25.0 ? 'Normal'
    : bmiResult <= 30.0 ? 'Overweight'
    : 'Obese';
}

/*
===========
SOLUTION 2
===========
const bmi = (weight, height) => {
  const bmiResult = weight / height ** 2;
    
  switch(true) {
    case bmiResult <= 18.5:
      return 'Underweight';
    case bmiResult <= 25.0:
      return 'Normal';
    case bmiResult <= 30.0:
      return 'Overweight';
    default:
      return 'Obese';
  }
}
*/
