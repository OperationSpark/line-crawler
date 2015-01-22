The Line Crawler
===

This little motion poem is a play on Ari Bader-Natal line sketch, using the draw line API to create a cool randomized piece of art.

## Installation

Create a new Cloud9 workspace and clone the project from github.com:

1. From your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace":
Select "Clone From URL":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/clone-new-workspace.png">

2. In the "Source URL" form input, copy and paste in the following URL:

        https://github.com/OperationSpark/line-crawler.git

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/paste-clone-url.png">

3. In the environment selection box, select "Node":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/select-node-env.png">

4. Click the green button "Create".

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/click-create.png">

5. Wait for the workspace to finish spooling (while spooling up, you'll see a spinning gear on the newly created workspace in the sidebar):

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/workspace-spooling.png">

6. Once the workspace is completed, click the green button, "START EDITING".

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/start-editing.png">

7. Now, when the workspace is loaded, select the command-line in the bottom window pane, and enter the command `bower install`, then press `Enter`, like this:

    <img src="https://raw.githubusercontent.com/OperationSpark/magic-8-ball/master/img/npm-install-magic-8.png">

You'll see some test flying by on the command-line as some required files are installed... and...

Nice, you're in business...

***

## Overview

### Specs

Our journey into programmer art continues, using randomized drawing positions and color in this little motion poem.

### Take Away

Using the draw line API to create a cool randomized piece of art.

Some concepts you'll learn are:


* The CreateJS using our draw utility.
* RGB color.
* Using constants to represent state and to avoid magic values and typos in code.
* Leveraging the power of built-in and 3rd party API (DRY), like Math and opspark-draw.
* Variable declaration and initialization.
* Function declaration and invocation, passing arguments to functions.
* Conditional statements - making decisions in code.
* Random number generation within a 0-based range.

### Entering Code

As we work through the app, you'll find `// TODO //` notes in our `app.js` file, and _under_ these `TODO` lines is where you'll enter the code we need to type.  It's important you enter the code you need to type for the step under these `TODO` place markers, because code is executed in a particular order.

So, to complete a lesson step, _find_ the `TODO` place marker in the appropriate JavaScript file:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/find-todo.png">

...then put your cursor on the line below the `TODO`, and enter the code from the current lesson step:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/todo-done.png">

Sweet!

### Type of App : Web

Note that **this app will run _in a web browser_**, preferably Chrome.

***

## Lesson Steps

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

###TODO 2 : Initialize Our Variables

````javascript
init: function() {
    // TODO 2 : Initialize our variables //
    i = 0;
    direction = ACROSS;
    shape = new createjs.Shape();
    view.addChild(shape);
},
````

###TODO 3 : Create a Condition for Drawing ACROSS

````javascript
update: function () {
    // NOTE: draw.line(fromX, fromY, toX, toY, color, thickness, shape);
    
    // TODO 3 : Create the condition for ACROSS //
    if (direction === ACROSS) {
        draw.line(i, 0, Math.random() * canvas.width, canvas.height, draw.randomColor(25, 200, 255, .4), 7, shape);
        if (i < canvas.width) {
            i++;
        } else {
            direction = DOWN;
            i = 0;
        }            
    }
    
    // other code ...
````

***

## Just Code TODOs

###TODO 1 : Declare Our Variables

We going to need a few variables: The variable `i`, a counter or _index_ which we'll increment to tell us _where_ to start drawing.  A `shape`, which we'll assign to a CreateJS Shape and onto which we'll draw our lines.  And finally, a variable to represent which direction we'll increment our drawing position, represented by our constants, ACROSS, DOWN, BACK, UP.

````javascript
// TODO 1 : Declare our variables //
var i, shape, direction;
````
###TODO 2 : Initialize Our Variables

````javascript
init: function() {
    // TODO 2 : Initialize our variables //
    i = 0;
    direction = ACROSS;
    shape = new createjs.Shape();
    view.addChild(shape);
},
````

###TODO 3 : Create a Condition for Drawing ACROSS

````javascript
update: function () {
    // NOTE: draw.line(fromX, fromY, toX, toY, color, thickness, shape);
    
    // TODO 3 : Create the condition for ACROSS //
    if (direction === ACROSS) {
        draw.line(i, 0, Math.random() * canvas.width, canvas.height, draw.randomColor(25, 200, 255, .4), 7, shape);
        if (i < canvas.width) {
            i++;
        } else {
            direction = DOWN;
            i = 0;
        }            
    }
    
    // other code ...
````

###TODO 4 : Create a Condition for Drawing DOWN

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

## Just Code TODOs in Google Presentation

<a href="" target="_blank">Code Presentation</a>

&copy; Operation Spark 2015