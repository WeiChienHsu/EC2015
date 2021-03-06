/* 
 * The other benefit of using arrow functions with promises/callbacks is 
 * that it reduces the confusion surrounding the this keyword. In code with
 * multiple nested functions, it can be difficult to keep track of and
 * remember to bind the correct this context. In ES5, you can use workarounds
 * like the .bind method (which is slow) or creating a closure using  
 * var self = this;
 */


// Rename and keep `this` in local context
var myObj = {
    oneFunction: function () {...},

    getAsyncData: function (callback) {
        callback();
    },

    render: function () {
        var that = this;
        this.getAsyncData(function () {
            that.oneFunction();
        });
    }
};

myObj.render();