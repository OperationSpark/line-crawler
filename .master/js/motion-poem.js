(function (window) {

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;

    window.opspark.makeMotionPoem = function () {
        var view = new createjs.Container();
        stage.addChild(view);

        const ACROSS = 'across';
        const DOWN = 'down';
        const BACK = 'back';
        const UP = 'up';

        // TODO 1 : Declare our variables //
        var i, shape, direction;

        var _motionPoem = {
            init: function() {
                // TODO 2 : Initialize our variables //
                i = 0;
                direction = ACROSS;
                shape = new createjs.Shape();
                view.addChild(shape);
            },

            update: function () {
                // NOTE: draw.line(fromX, fromY, toX, toY, color, thickness, shape);
                
                ////////////////////////////////////////////////////////////////
                // START OF CONDITIONAL STATEMENTS                            //
                ////////////////////////////////////////////////////////////////
                
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
                ////////////////////////////////////////////////////////////////
                // END OF CONDITIONAL STATEMENTS                              //
                ////////////////////////////////////////////////////////////////
            }
        };
        return _motionPoem;
    };
}(window));