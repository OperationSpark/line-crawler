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
        

        var _motionPoem = {
            init: function() {
                // TODO 2 : Initialize our variables //
                
            },

            update: function () {
                // NOTE: draw.line(fromX, fromY, toX, toY, color, thickness, shape);
                
                ////////////////////////////////////////////////////////////////
                // START OF CONDITIONAL STATEMENTS                            //
                ////////////////////////////////////////////////////////////////
                
                // TODO 3 : Create the condition for ACROSS //
                

                // TODO 4 : Create a condition for DOWN //
                 
                
                // TODO 5 : Create a condition for BACK //
                
                 
                // TODO 6 : Create a condition for UP //
                
                
                ////////////////////////////////////////////////////////////////
                // END OF CONDITIONAL STATEMENTS                              //
                ////////////////////////////////////////////////////////////////
            }
        };
        return _motionPoem;
    };
}(window));