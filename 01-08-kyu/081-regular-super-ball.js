/*
==========
CHALLENGE
==========
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

/*
===========
SOLUTION 1
===========
*/
class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}

/*
===========
SOLUTION 2
===========
class Ball {
  constructor(ballType = 'regular') {
    this._ballType = ballType;
  }

  get ballType() {
    return this._ballType;
  }
}
*/