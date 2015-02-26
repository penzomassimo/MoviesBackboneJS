/**
 * Created by massimo on 2/25/15.
 */
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "handleRoute",
        "man": "handleRoute2"
    },
    handleRoute: function(){
        var book = new singleBook();
    },
    handleRoute2: function(){
        console.log('route22222');
    }
});