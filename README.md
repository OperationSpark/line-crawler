The Line Crawler
===

This little motion poem is a play on Ari Bader-Natal line sketch, using the draw line API to create a cool randomized piece of art.

On top of the usual view object onto which we can add children display objects, we've added for you some constants:

````javascript
const ACROSS = 'across';
const DOWN = 'down';
const BACK = 'back';
const UP = 'up';
````

These will represent the state of our little app, and help us make decisions as to _how_ to draw our lines.  Often, constants are used to express those type of things that will never change and ...

###TODO 1 : Declare Our Variables

We going to need a few variables: The variable `i`, a counter or _index_ which we'll increment to tell us _where_ to start drawing.  A `shape`, which we'll assign to a CreateJS Shape and onto which we'll draw our lines.  And finally, a variable to represent which direction we'll increment our drawing position, represented by our constants, ACROSS, DOWN, BACK, UP.

````javascript
// TODO 1 : Declare our variables //
var i, shape, direction;
````

