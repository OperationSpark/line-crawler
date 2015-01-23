###TODO 4 : Create a Condition for Drawing DOWN

First, notice that we change our `fromX` argument, the first argument passed to the `draw.line()` method, to `canvas.width`.  This is because we now want to draw from right to left across the canvas, while moving our drawing position DOWN.

Next, the `if else` statement for the `DOWN` state assumes that our index `i` has been reset to `0` (which we did at the end of our `ACROSS` condition).  This is because we now want to start drawing  _from_ a `y` position of `0`, and end our drawing at a `y` position of `canvas.height` - moving our drawing position _down_ the height of the canvas.

To affect the `fromY` position, we pass the `i` variable as the _second_ argument to the `draw.line()`, the `fromY` parameter.  Thus, while incrementing `i`, we're increasing the `fromY` value.

And our `toX` is set now to `0`, with our `toY` value randomized within the range of the height of our canvas.

Because we travel _down_ the screen or canvas with incremented values on the y axis, we can continue to increment `i` `if (i < canvas.height)`.

Once the conditional statement `if (i < canvas.height)` returns false, we prepare for the next drawing phase by setting the `direction` to `BACK`, and next setting `i` to the value of `canvas.width`, allowing us to commence drawing at the right-most side of the canvas, moving back along the width of the canvas.

````javascript
// other code...

// TODO 4 : Create a condition for DOWN //
else if (direction === DOWN) {
    draw.line(canvas.width, i, 0, Math.random() * canvas.height, draw.randomColor(50, 255, 255, .3), 7, shape);
    if (i < canvas.height) {
        i++;
    } else {
        direction = BACK;
        i = canvas.width;
    }
}

// other code...
````

###TODO 5 : Create a Condition for Drawing BACK

We move our `i` variable back to be passed in as the `fromX` argument to the `draw.line()` method.  You'll notice that at the end of our `DOWN` condition, we set `i = canvas.width;`, and inside our `BACK` condition, we're _decrementing_ `i` using `i--`.  This statement subtracts `1` from the current value of `i`.  This has the effect of moving the `fromX` position backwards along the width of the canvas.

The `fromY` is set to `canvas.height` so we always drawing from the bottom of the canvas.

And finally, we're randomizing the `toX` within the range of the `canvas.width`, and `0` as the `toY` argument so we're drawing to some random position on the top side of our canvas.

````javascript
// other code...

// TODO 5 : Create a condition for BACK //
else if (direction === BACK) {
    draw.line(i, canvas.height, Math.random() * canvas.width, 0, draw.randomColor(50, 200, 255, .2), 7, shape);
    if (i > 0) {
        i--;
    } else {
        direction = UP;
        i = canvas.height;
    }
}

// other code...
````

###TODO 6 : Create a Condition for Drawing UP

The last condition statement can be merely an `else` statement because we know we have no more states against which to check.

At this point, we've set `i = canvas.height;`, so we're starting from the bottom of the canvas, moving our drawing position up its left side.

We're always drawing from the `x` position of `0`, so our `fromX` argument is set to `0`.

The `fromY` argument gets the, again, decrementing `i` variable.

The argument `toX` is always the `canvas.width` and the `toY` argument is randomized within the range of the `canvas.height`, such that we're drawing across the canvas, from left to some random position on the right side of the canvas.

Finally, we under the line of code where we reset `i = 0;`, we clear the graphics on the shape with the call to `shape.graphics.clear();`.  This clears all of our drawing on the `shape` variable > if we didn't do this, eventually the program will slow down considerably as performance from all the drawing and re-drawing take a toll.

````javascript
// TODO 6 : Create a condition for UP //
else {
    draw.line(0, i, canvas.width, Math.random() * canvas.height, draw.randomColor(50, 255, 200, .4), 7, shape);
    if (i > 0) {
        i--;
    } else {
        direction = ACROSS;
        i = 0;
        shape.graphics.clear();
    }
}
````