/**
 * Created by massimo on 2/25/15.
 */
define(['underscore', 'backbone', 'scripts/views/singleBook'], function(_, Backbone, singleBook){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "handleRoute",
            "man": "handleRoute2"
        },
        handleRoute: function(){
            var v = new singleBook();
        },
        handleRoute2: function(){
            console.log('route222223');
        }
    });
    return AppRouter;
});
