###TODO 4 : Create a Condition for Drawing DOWN

The following `if else` statement assumes that our index `i` has been reset to `0`.  We then change what values are incremented and randomized when calling the `draw.line()` API, so that while incrementing `i`, we're increasing the `fromY` value.  And our `toX` is set now to `0`, with our `toY` value randomized within the height of our canvas.

Because we travel _down_ the screen or canvas with incremented values on the y axis, we can continue to increment `i` `if (i < canvas.height)`.

Once the conditional statement `if (i < canvas.height)` returns false, we prepare for the next drawing phase by setting the `direction` to `BACK`, and next set `i` to the value of `canvas.width`, allowing us to commence drawing at the right-most side of the canvas, moving back along the width of the canvas.

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